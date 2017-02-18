'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  setAction(){
    //auto render template file index_index.html
    return this.display();
  }
  accessAction(){
    //auto render template file index_index.html
    return this.display();
  }
}
