'use strict';
const Controller = require('egg').Controller;
class WorldController extends Controller {
  async getUser() {
    const { ctx, service } = this;
    const userId = ctx.params.id;
    const result = await service.world.getUser(userId);
    ctx.body = result;
	ctx.status=200
  };
  async getHotUser(){
	 const { ctx, service } = this;
	 const user = ctx.params.user;
	 const result = await service.world.getHotUser(user);
	 if(result.affectedRows === 1){
		 
	 }
  }
}
module.exports = WorldController;
