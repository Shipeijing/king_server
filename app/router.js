'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const {
		router,
		controller
	} = app;
	//http请求入口
	router.get('/userLogin', controller.user.login); //用户登录
	router.post('/registered', controller.user.login); //用户注册
	// router.get('/home', controller.home.login); //首页
	// router.get('/user', controller.user.login); //用户
  router.get('/getTopIc', controller.topic.getTopIc); //日志
	router.get('/getUser', controller.world.getUser); //日志
	router.get('/getHotUser', controller.world.getHotUser); //日志
	//socket请求入口
//	io.of('/').route('login', io.controller.chat.server);
};
