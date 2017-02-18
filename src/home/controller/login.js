'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  //  async indexAction(){
  //     // let rbacUserInfo =await this.session('rbacUserInfo');
  //     // //auto render template file user_index.html
  //     // if (!think.isEmpty(rbacUserInfo)){
  //     //   this.assign('rbacUserInfo',rbacUserInfo);
  //     // }else{
  //     //   return this.redirect('/user/login');
  //     // }
  //
  //     return  this.display();
  // }
  async indexAction(){
     let rbacUserInfo =await this.session('rbacUserInfo');
     //auto render template file user_index.html
     if (!think.isEmpty(rbacUserInfo)){
         this.assign('rbacUserInfo',rbacUserInfo);
     }else{
         //return this.redirect('/login');
     }

     return  this.display();
   }
  async dologinAction(){

        //let aa = await this.session("rbacUserInfo");


        let data=this.post();
        let uname = await data.email;
        //console.log("uname",uname)
        let result=await this.model("user").where({email: uname}).find();
        let info={
              email: uname,
        }
        console.log("uname===result.email",uname===result.email)
        if(uname===result.email){
              await this.session("rbacUserInfo", info);
              return this.json({status:1,msg:"登录成功!"});
        }else{
            return this.json({status:0,msg:"登录失败!"});
        }
  }
}
