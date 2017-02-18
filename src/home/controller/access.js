'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   async indexAction(){
     let result=await this.model("access").limit(10).select();
     this.assign("roleList",result)
     //auto render template file index_index.html
     return this.display();
   }
  setAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async dosetAction(){
      let data=this.post();
      let model = this.model("access");
      let insertId = await model.add({
          id:data.id,
          title:data.title,
          urls:data.urls
        });
      console.log("insertId",insertId)
  }
}
