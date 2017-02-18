'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){



    let result=await this.model("role").limit(10).select();


    this.assign("roleList",result)
    //auto render template file index_index.html
    return this.display();
  }
  async setAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async dosetAction(){
      let data=this.post();
      let model = this.model("role");
      let insertId = await model.add({id:data.id, name:data.name});
      console.log("insertId",insertId)
  }
  accessAction(){
    //auto render template file index_index.html
    return this.display();
  }

}
