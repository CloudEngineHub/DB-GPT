USE dbgpt;
-- chat_history
ALTER TABLE  chat_history ADD COLUMN `app_code` varchar(255) DEFAULT NULL COMMENT 'App unique code' after `message_ids`;

-- gpts_app
ALTER TABLE  gpts_app ADD COLUMN `published` varchar(64) DEFAULT 'false' COMMENT 'Has it been published?';
ALTER TABLE  gpts_app ADD COLUMN `param_need` text DEFAULT NULL COMMENT 'Parameter information supported by the application';
ALTER TABLE  gpts_app ADD COLUMN `admins` text DEFAULT NULL COMMENT 'administrator';


-- connect_config
ALTER TABLE  connect_config ADD COLUMN `user_name` varchar(255) DEFAULT NULL COMMENT 'user name';
ALTER TABLE  connect_config ADD COLUMN `user_id` varchar(255) DEFAULT NULL COMMENT 'user id';


--knowledge_space
ALTER TABLE  knowledge_space ADD COLUMN `user_id` varchar(255) DEFAULT NULL COMMENT 'knowledge space owner';
ALTER TABLE  knowledge_space ADD COLUMN `user_ids` text DEFAULT NULL COMMENT 'knowledge space members';


-- document_chunk
ALTER TABLE  document_chunk ADD COLUMN `questions` text DEFAULT NULL COMMENT 'chunk bind questions';

-- knowledge_document
ALTER TABLE  knowledge_document ADD COLUMN `doc_token` varchar(100) DEFAULT NULL COMMENT 'doc token';
ALTER TABLE  knowledge_document ADD COLUMN `questions` text DEFAULT NULL COMMENT 'knowledge questions';

--gpts_messages
ALTER TABLE  gpts_messages ADD COLUMN `is_success` int(4)  NULL DEFAULT 0 COMMENT 'agent message is success';
ALTER TABLE  gpts_messages ADD COLUMN `app_code` varchar(255) NOT NULL COMMENT 'Current AI assistant code';
ALTER TABLE  gpts_messages ADD COLUMN `app_name` varchar(255) NOT NULL COMMENT 'Current AI assistant name';
ALTER TABLE  gpts_messages ADD COLUMN `resource_info` text DEFAULT NULL  COMMENT 'Current conversation resource info';

--prompt_manage
ALTER TABLE  prompt_manage ADD COLUMN `prompt_code` varchar(255) NULL COMMENT 'Prompt code';
ALTER TABLE  prompt_manage ADD COLUMN `response_schema` text  NULL COMMENT 'Prompt response schema';
ALTER TABLE  prompt_manage ADD COLUMN `user_code` varchar(128)  NULL COMMENT 'User code';

-- dbgpt.recommend_question definition
CREATE TABLE `recommend_question` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'autoincrement id',
  `gmt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  `gmt_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'last update time',
  `app_code` varchar(255) DEFAULT NULL COMMENT 'Current AI assistant code',
  `question` text DEFAULT NULL COMMENT 'question',
  `user_code` int(11) DEFAULT NULL COMMENT 'user code',
  `sys_code` varchar(255) DEFAULT NULL COMMENT 'system app code',
  `valid` varchar(10) DEFAULT 'true' COMMENT 'is it effective，true/false',
  `chat_mode` varchar(255) DEFAULT NULL COMMENT 'Conversation scene mode，chat_knowledge...',
  `params` text DEFAULT NULL COMMENT 'question param',
  `is_hot_question` varchar(10) DEFAULT 'false' COMMENT 'Is it a popular recommendation question?',
  PRIMARY KEY (`id`),
  KEY `idx_app_code` (`app_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT="AI application related recommendation issues";

--dbgpt.user_recent_apps definition
CREATE TABLE `user_recent_apps` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'autoincrement id',
  `gmt_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',
  `gmt_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'last update time',
  `app_code` varchar(255) DEFAULT NULL COMMENT 'AI assistant code',
  `last_accessed` timestamp NULL DEFAULT NULL COMMENT 'User recent usage time',
  `user_code` varchar(255) DEFAULT NULL COMMENT 'user code',
  `sys_code` varchar(255) DEFAULT NULL COMMENT 'system app code',
  PRIMARY KEY (`id`),
  KEY `idx_app_code` (`app_code`),
  KEY `idx_last_accessed` (`last_accessed`),
  KEY `idx_user_code` (`user_code`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='User recently used apps'