'use strict';
// 用户增删改查
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
	console.log(ctx.query )
    const userId = ctx.query.id;
    const result = await service.user.login(userId);
    ctx.body = result;
	ctx.status=200
  };
  async registered(){
	 const { ctx, service } = this;
	 const user = ctx.params.user;
	 const result = await service.user.registered(user);
	 if(result.affectedRows === 1){
		 
	 }
  }
}
module.exports = UserController;