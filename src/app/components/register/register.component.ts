import { Component, OnInit } from '@angular/core';
import {AbcService} from './../../abc.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name:String;
  username:String;
  email:String;
  password:String;

constructor(
   private flash:NgFlashMessageService,
   private ab:AbcService,
   private auth:AuthService,
   private router:Router
  )

  {}
//****Button change upon user****
    state = true;

    stuClick() {

      if(this.state != true){
      this.state=true;
      };
    }
    cpClick() {
      if(this.state != false){
      this.state = false;
    }

    }
//*********************
  signUp(){
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    };
     //alert(user.name);
     console.log(user);
    if(!this.ab.validateRegister(user)){
        this.flash.showFlashMessage({messages:['please fill in all fields'],
        dismissible:true,
        timeout:10000,
       type:'danger'});
        return false;
    }
    if(!this.ab.validateEmail(user.email)){
      this.flash.showFlashMessage({messages:['please enter a valid email'],
        dismissible:true,
        timeout:10000,
       type:'danger'});
      return false;
    }

    this.auth.registerUser(user).subscribe(res=>{
      if(res.state){
        this.flash.showFlashMessage({messages:['Successfully registered!'],
          dismissible:true,
          timeout:10000,
         type:'success'});
          this.router.navigateByUrl('/login');

      }
      else{
        this.flash.showFlashMessage({messages:['Something went wrong!'],
          dismissible:true,
          timeout:10000,
         type:'danger'});
      }

    });

}

/**
isChecked1(checkbox,sub1){
var submitBtn=document.getElementById(sub1);
if(checkbox.checked==true){
  submitBtn.disabled="";
}
else
submitBtn.disabled="disabled";
}
isChecked2(checkbox,sub2){
var requestBtn=document.getElementById(sub2);
if(checkbox.checked==true){
requestBtn.disabled="";
}
else
requestBtn.disabled="disabled";
}**/

/**
var checker = document.getElementById('stuchkbx');
var subbtn = document.getElementById('sub1');
checker.onchange = function() {
  if(this.checked){
    subbtn.disabled = false;
} else {
    subbtn.disabled = true;
}
}
**/

}
