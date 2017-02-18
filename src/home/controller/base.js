'use strict';

 export default class extends think.controller.base {
   /**
    * before
    */
   async __before(){ //__before()是在所有action执行之前调用
    //判断登陆
    let http = this.http;
     if(http.controller === 'login' && http.action === 'dologin'){ //如果是user_login那么久不验证了，直接返回给予登录。
       return;
     }
    let rbacUserInfo=await this.session("rbacUserInfo");
    if(think.isEmpty(rbacUserInfo)){
        if(this.isAjax()){
           return this.fail('NOT_LOGIN');
         }
    }else{
        console.log("rbacUserInfo---",rbacUserInfo)
        this.assign('rbacUserInfo',rbacUserInfo);
    }
    //判断登陆
   }

 }
