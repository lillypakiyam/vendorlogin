import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseAuthenticationService } from 'src/app/service/firebase-authentication.service';
import {updatePassword, getAuth, updateEmail} from 'firebase/auth'
import { FirestoreService } from 'src/app/service/firestore.service';
import { async } from '@firebase/util';
declare let Email : any;

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.page.html',
  styleUrls: ['./login-info.page.scss'],
})
export class LoginInfoPage implements OnInit {

public textarea = false;
message:string;
   data:any;
   password:any;
   numberId:any;
   emailId:any;
   taxDetails:any=[];
  constructor(private router: Router,
              private api: ApiService,
              private authentication: FirebaseAuthenticationService,
              private firestore: FirestoreService,
              private Aroute: ActivatedRoute) { 
    // this.Aroute.queryParams.subscribe(()=>
    // {
      this.data = this.router.getCurrentNavigation().extras.state.item
   
    // })
    this.data['tax_Details'].forEach(tax =>{
      // console.log('details', tax);
      this.taxDetails.push( tax)
    })
    console.log('details', this.taxDetails);
    console.log('details', this.data);
    this.password = this.data.Confirm_new_password !== null? this.data.Confirm_new_password : this.data.temprory_password
    // console.log('details', this.data['tax_Details']);
  }

  ngOnInit() {
  }

  showtextarea(){
    this.textarea = !this.textarea;
  }

  sendVendorEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vendordeveloper22@gmail.com",
        Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
        // To : document.getElementById('requestEmail').value,
        To : this.data.requestEmail,
        From : 'vendordeveloper22@gmail.com',
        Subject : "vendor account",
        Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 temprory Id : ${this.data.temporaryId},
                 password : ${this.data.Confirm_new_password}
                 description: ${this.message}
                 `,
                 
    }).then(message =>{
      alert('message sent')
      console.log(message)
      this.router.navigate(['admin/vendor-info'])
    })
  }

  approveDetail(){
    console.log(this.password)
    this.authentication.login(this.data.temporaryId+'@gmail.com', this.password).then(use =>{
      console.log(use)
      this.createPass()
    }).catch(async err =>{
      console.log(err)
      const toast=await this.api.createToast('already approved in this vendorId', false,"middle")
      await toast.present();
    })
  }

  createPass(){
    var random_id = '';
  // var characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var characters = '1234567890';
  for(var i=0; i < 10; i++){
    random_id += characters.charAt(Math.floor(Math.random() * characters.length)); 
    this.numberId = random_id
    console.log(this.numberId)
  }
  this.emailId = this.numberId+"@gmail.com"

    const auth = getAuth()
    const user = auth.currentUser
    console.log(auth, user)
    updateEmail(user, this.emailId).then(async res =>{
      console.log(res)
      const permenant:any ={
        permenantId: this.numberId,
        approved: true,
    }
      // this.router.navigate(['pages/vendor-profile'])
      this.firestore.update('vendorAdd',this.data.id, permenant).then(data =>{
        console.log(data)
      })
      this.sendPermenantEmail();
      const toast=await this.api.createToasts('approved in this vendorId', false,"middle")
      await toast.present();

    }).catch(async err =>{
      console.log(err)
      const toast=await this.api.createToast('already approved in this vendorId', false,"middle")
      await toast.present();

    })
  }

  sendPermenantEmail(){
    // const email = new email.send()
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vendordeveloper22@gmail.com",
        Password : "EBB99C1A1A1C71FFE9E6F9EE64F38E041E20",
        // To : document.getElementById('requestEmail').value,
        To : this.data.requestEmail,
        From : 'vendordeveloper22@gmail.com',
        Subject : "vendor account",
        Body : `${'we have created a new vendor account for you.Here is the link to activate the account.'}
                 Link: 'https://vendorweb-f72c9.web.app/pages/login',
                 permanent Id : ${this.numberId},
                 password : ${this.password}
                 `,
                 
    }).then(message =>{
      alert('message sent')
      console.log(message)
      this.router.navigate(['admin/vendor-info'])
    })
  }

}
