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
  async setAction(){
    var i = 0;
    var myGet = this.get();
    var myDetail = "";
    for( i in myGet){
        myDetail = i
    }
    let data = this.get();
    let info=await this.model("access").where({id:myDetail}).find();

    this.assign("info",info)
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
