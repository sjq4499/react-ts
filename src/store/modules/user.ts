import { observable, action } from 'mobx';

export default class User {
   @observable list: any = [];
   @action getlist() {
      console.log(this);
   }
}
