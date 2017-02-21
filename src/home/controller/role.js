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
  async accessAction(){
     //console.log("---",this.get())
     var i = 0;
     var myGet = this.get();
     var myDetail = "";
     for( i in myGet){
        myDetail = i
     }
     let model = this.model("role");
     let info = await model.where({id:myDetail}).find();

     this.assign("info",info)

     let modelaccess = this.model("access");
     let access_list = await modelaccess.limit(10).select();
     console.log("access_list",access_list)

     this.assign("access_list",access_list)


     return this.display();
  }
  doaccessAction(){
      console.log("我是do")

  }

}
