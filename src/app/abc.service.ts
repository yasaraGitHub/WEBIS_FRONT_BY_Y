import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbcService {

  constructor() { }
  validateRegister(user){
    if(user.name==undefined||user.username==undefined||user.email==undefined||user.password==undefined){
      return false;
    }else{
     return true
    }
  }
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
/**
  isChecked1(stuchkbx,sub1){
  var submitBtn=document.getElementById(sub1);
  if(stuchkbx.checked==true){
    submitBtn.disabled="";
  }
  else
  submitBtn.disabled="disabled";
  }

  isChecked2(cpchkbx,sub2){
  var requestBtn=document.getElementById(sub2);
  if(cpchkbx.checked==true){
  requestBtn.disabled="";
  }
  else
  requestBtn.disabled="disabled";
  }
**/

}
