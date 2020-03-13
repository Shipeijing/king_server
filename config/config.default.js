/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = exports = {};
	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: 'localhost',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: 'root',
			// 数据库名
			database: 'king',
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	};
	// config.io = {
	// 	init: {}, // passed to engine.io
	// 	namespace: {
	// 		'/': {
	// 			connectionMiddleware: [],
	// 			packetMiddleware: [],
	// 		},
	// 		'/example': {
	// 			connectionMiddleware: [],
	// 			packetMiddleware: [],
	// 		},
	// 	},
	// 	// redis: {
	// 	// 	host: {
	// 	// 		redis server host
	// 	// 	},
	// 	// 	port: {
	// 	// 		redis server port
	// 	// 	},
	// 	// 	auth_pass: {
	// 	// 		redis server password
	// 	// 	},
	// 	// 	db: 0,
	// 	// },
	// };
	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1583476759422_6157';

	// add your middleware config here
	config.middleware = [];
	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};
	//配置跨域
	config.security = {
		csrf: {
			enable: false
		},
		domainWhiteList: ['*']
	};
	config.cors = {
		origin: '*',
		allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
	};
	return {
		...config,
		...userConfig,
	};
};
