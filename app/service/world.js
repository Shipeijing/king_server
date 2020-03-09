'use strict';
const Service = require('egg').Service;
class WorldService extends Service {
   	async getUser(uid) {
   		const result = await this.app.mysql.get('user', {
   			id: uid
   		});
   		return {
   			user
   		};
   	};
   	async getHotUser() {
   		const result = await this.app.mysql.select('user', { // 搜索 post 表
   			where: {}, // WHERE 条件
   			columns: ['author'], // 要查询的表字段
   			orders: [
   				['created_at', 'desc']
   			], // 排序方式
   			limit: 10, // 返回数据量
   			offset: 0, // 数据偏移量
   		});
   		return {
   			user
   		};
   	}
}
module.exports = WorldService;