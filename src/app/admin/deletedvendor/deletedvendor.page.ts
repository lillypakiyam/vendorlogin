import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import * as moment from 'moment';
import { InituserService } from 'src/app/service/inituser.service';
import { async } from '@firebase/util';

@Component({
  selector: 'app-deletedvendor',
  templateUrl: './deletedvendor.page.html',
  styleUrls: ['./deletedvendor.page.scss'],
})
export class DeletedvendorPage implements OnInit {

  TodayDate:string;
  loggedInAdmin:any;
  public company={
    companyname:'',
    companyEmail:'',
    requestEmail:'',
  }
  constructor(private api: ApiService,
              private firestore: FirestoreService,
              private initUser:InituserService,
              private router: Router) { 
                const currentDate = new Date();
                this.TodayDate = moment(currentDate).format('YYYY-MM-DD')
                this.loggedInAdmin = this.initUser.getUserData();
                console.log(this.TodayDate)
    console.log(this.api.tempVendor)
    console.log(this.api.tempVendor.id)
  }

  ngOnInit() {
  }

  deleteVendors(){
    this.firestore.createWithvendor('deleteVendor', this.api.tempVendor.id,this.api.tempVendor).then(ress=>{
      console.log(ress)
     const dele:any ={
      delete_date : this.TodayDate,
      delete_name : this.loggedInAdmin.name,
     }
        this.firestore.update('deleteVendor',this.api.tempVendor.id, dele).then(use =>{
          console.log(use)
        })

      this.firestore.delete('vendorAdd', this.api.tempVendor.id).then(async use =>{
        console.log(use)
        this.router.navigate(['admin/invitedvendors'])
        const toast =await this.api.createToasts('successfully deleted',false,'middle')
        await toast.present()
      })
    })
  }

  back(){
    this.router.navigate(['admin/invitedvendors'])
  }
  moveToHome(){
    this.router.navigate(['admin/home'])
  }
}
