'use strict';
// 用户增删改查
const Controller = require('egg').Controller;

class TopicController extends Controller {
 async getTopIc() {
    const { ctx, service } = this;
    const userId = ctx.query.id;
    const result = await service.topic.getTopIc(userId);
    ctx.body = result;
	ctx.status=200
	console.log(result)
  };
}
module.exports = TopicController;