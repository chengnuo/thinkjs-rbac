'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   async indexAction(){
     let result=await this.model("user").limit(10).select();
     this.assign("userList",result)
     //auto render template file index_index.html
     return this.display();
   }
  async setAction(){
    let result=await this.model("role").limit(10).select();
    this.assign("roleList",result)
    //auto render template file index_index.html
    return this.display();
  }

  async dosetAction(){
      let data=this.post();
      let model = this.model("user");
      let insertId = await model.add({
        id:data.id,
        name:data.name,
        email:data.email,
        role_ids:data.role_ids
      });
      console.log("insertId",insertId)
  }
}
