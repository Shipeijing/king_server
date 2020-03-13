'use strict';
const Service = require('egg').Service;
class TopicService extends Service {
    async getTopIc(uid) {
       const result = await this.app.mysql.select('topic', {
           uid: uid
       });
       return {
           result
       };
   };
}
module.exports = TopicService;