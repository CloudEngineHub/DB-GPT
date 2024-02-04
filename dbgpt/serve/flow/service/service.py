import logging
from typing import List, Optional

from fastapi import HTTPException

from dbgpt.component import BaseComponent, SystemApp
from dbgpt.core.awel.dag.dag_manager import DAGManager
from dbgpt.core.awel.flow.flow_factory import FlowFactory
from dbgpt.serve.core import BaseService
from dbgpt.storage.metadata import BaseDao
from dbgpt.storage.metadata._base_dao import QUERY_SPEC
from dbgpt.util.dbgpts.loader import DBGPTsLoader
from dbgpt.util.pagination_utils import PaginationResult

from ..api.schemas import ServeRequest, ServerResponse
from ..config import SERVE_CONFIG_KEY_PREFIX, SERVE_SERVICE_COMPONENT_NAME, ServeConfig
from ..models.models import ServeDao, ServeEntity

logger = logging.getLogger(__name__)


class Service(BaseService[ServeEntity, ServeRequest, ServerResponse]):
    """The service class for Flow"""

    name = SERVE_SERVICE_COMPONENT_NAME

    def __init__(self, system_app: SystemApp, dao: Optional[ServeDao] = None):
        self._system_app = None
        self._serve_config: ServeConfig = None
        self._dao: ServeDao = dao
        self._dag_manager: Optional[DAGManager] = None
        self._flow_factory: FlowFactory = FlowFactory()
        self._dbgpts_loader: Optional[DBGPTsLoader] = None

        super().__init__(system_app)

    def init_app(self, system_app: SystemApp) -> None:
        """Initialize the service

        Args:
            system_app (SystemApp): The system app
        """
        self._serve_config = ServeConfig.from_app_config(
            system_app.config, SERVE_CONFIG_KEY_PREFIX
        )
        self._dao = self._dao or ServeDao(self._serve_config)
        self._system_app = system_app
        self._dbgpts_loader = system_app.get_component(
            DBGPTsLoader.name, DBGPTsLoader, or_register_component=DBGPTsLoader
        )

    def before_start(self):
        """Execute before the application starts"""
        self._dag_manager = DAGManager.get_instance(self._system_app)

    def after_start(self):
        """Execute after the application starts"""
        self.load_dag_from_db()
        self.load_dag_from_dbgpts()

    @property
    def dao(self) -> BaseDao[ServeEntity, ServeRequest, ServerResponse]:
        """Returns the internal DAO."""
        return self._dao

    @property
    def dag_manager(self) -> DAGManager:
        """Returns the internal DAGManager."""
        if self._dag_manager is None:
            raise ValueError("DAGManager is not initialized")
        return self._dag_manager

    @property
    def dbgpts_loader(self) -> DBGPTsLoader:
        """Returns the internal DBGPTsLoader."""
        if self._dbgpts_loader is None:
            raise ValueError("DBGPTsLoader is not initialized")
        return self._dbgpts_loader

    @property
    def config(self) -> ServeConfig:
        """Returns the internal ServeConfig."""
        return self._serve_config

    def create(self, request: ServeRequest) -> ServerResponse:
        """Create a new Flow entity

        Args:
            request (ServeRequest): The request

        Returns:
            ServerResponse: The response
        """
        # Build DAG from request
        dag = self._flow_factory.build(request)
        request.dag_id = dag.dag_id
        # Save DAG to storage
        res = self.dao.create(request)
        # Register the DAG
        self.dag_manager.register_dag(dag)
        return res

    def load_dag_from_db(self):
        """Load DAG from db"""
        entities = self.dao.get_list({})
        for entity in entities:
            try:
                dag = self._flow_factory.build(entity)
                self.dag_manager.register_dag(dag)
            except Exception as e:
                logger.warning(
                    f"Load DAG({entity.name}, {entity.dag_id}) from db error: {str(e)}"
                )

    def load_dag_from_dbgpts(self):
        """Load DAG from dbgpts"""
        flows = self.dbgpts_loader.get_flows()
        for flow in flows:
            try:
                # Try to build the dag from the request
                self._flow_factory.build(flow)
                exist_inst = self.get({"name": flow.name})
                if not exist_inst:
                    self.create(flow)
                else:
                    # TODO check version, must be greater than the exist one
                    self.update(flow, check_editable=False)
            except Exception as e:
                logger.warning(f"Load DAG from dbgpts error: {str(e)}")

    def update(
        self, request: ServeRequest, check_editable: bool = True
    ) -> ServerResponse:
        """Update a Flow entity

        Args:
            request (ServeRequest): The request
            check_editable (bool): Whether to check the editable

        Returns:
            ServerResponse: The response
        """
        # Try to build the dag from the request
        self._flow_factory.build(request)

        # Build the query request from the request
        query_request = {"uid": request.uid}
        inst = self.get(query_request)
        if not inst:
            raise HTTPException(status_code=404, detail=f"Flow {request.uid} not found")
        if check_editable and not inst.editable:
            raise HTTPException(
                status_code=403, detail=f"Flow {request.uid} is not editable"
            )
        old_data: Optional[ServerResponse] = None
        try:
            update_obj = self.dao.update(query_request, update_request=request)
            old_data = self.delete(request.uid)
            if not old_data:
                raise HTTPException(
                    status_code=404, detail=f"Flow detail {request.uid} not found"
                )
            return self.create(update_obj)
        except Exception as e:
            if old_data:
                self.create(old_data)
            raise e

    def get(self, request: QUERY_SPEC) -> Optional[ServerResponse]:
        """Get a Flow entity

        Args:
            request (ServeRequest): The request

        Returns:
            ServerResponse: The response
        """
        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = request
        return self.dao.get_one(query_request)

    def delete(self, uid: str) -> Optional[ServerResponse]:
        """Delete a Flow entity

        Args:
            uid (str): The uid

        Returns:
            ServerResponse: The data after deletion
        """

        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = {"uid": uid}
        inst = self.get(query_request)
        if inst is None:
            raise HTTPException(status_code=404, detail=f"Flow {uid} not found")
        if not inst.dag_id:
            raise HTTPException(
                status_code=404, detail=f"Flow {uid}'s dag id not found"
            )
        try:
            self.dag_manager.unregister_dag(inst.dag_id)
        except Exception as e:
            logger.warning(f"Unregister DAG({inst.dag_id}) error: {str(e)}")
        self.dao.delete(query_request)
        return inst

    def get_list(self, request: ServeRequest) -> List[ServerResponse]:
        """Get a list of Flow entities

        Args:
            request (ServeRequest): The request

        Returns:
            List[ServerResponse]: The response
        """
        # TODO: implement your own logic here
        # Build the query request from the request
        query_request = request
        return self.dao.get_list(query_request)

    def get_list_by_page(
        self, request: QUERY_SPEC, page: int, page_size: int
    ) -> PaginationResult[ServerResponse]:
        """Get a list of Flow entities by page

        Args:
            request (ServeRequest): The request
            page (int): The page number
            page_size (int): The page size

        Returns:
            List[ServerResponse]: The response
        """
        return self.dao.get_list_page(request, page, page_size)