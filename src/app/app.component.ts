import { Component } from '@angular/core';
import { User } from './pages/models/user';
import { Vendor } from './pages/models/vendor';
import { InituserService } from './service/inituser.service';
import {NavController} from '@ionic/angular'
import { UtilService } from './service/util.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 private loggedinUser:User
 private loggedinVendor:Vendor;
  constructor(private initUser: InituserService,
              private util: UtilService,
              private navCont: NavController) {
    this.loggedinUser = this.initUser.getUserData()
    this.loggedinVendor = this.initUser.getVendorData()
    console.log(this.loggedinUser)
    console.log(this.loggedinVendor)
    // if (this.loggedinUser.id !==null){
      // if(this.loggedinUser.email === null){
      //   this.util.goToNew('admin/login')
      // }else{
      //   this.util.goToNew('admin/home')
      // }
    // }else {
      // this.util.goToNew('pages/login')
      // if(this.loggedinVendor.requestEmail !== null){
      //   this.util.goToNew('pages/password-change')
      //   // this.util.goToNew('pages/vendor-profile')
      // }
    // }

    if (this.loggedinVendor.id !==null){
      if(this.loggedinVendor.requestEmail === null){
        this.util.goToNew('pages/login')
      }else{
        this.util.goToNew('pages/password-change')
      }
    }else{
      this.util.goToNew('pages/login')
    }
    
  }


}
