'use strict';
const Service = require('egg').Service;
class UserService extends Service {
    async login(uid) {
        const user = await this.app.mysql.get('user', {
            id: uid
        });
        return {
            user
        };
    };
	 async registered(user) {
	    const user = await this.app.mysql.get('user', {
	        id: 1
	    });
	    return {
	        user
	    };
	}
}
module.exports = UserService;