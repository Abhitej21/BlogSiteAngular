import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../class/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){
    //  window.localStorage.removeItem("loggedUser")
  }

 
  loginForm = new FormGroup({
     username: new FormControl(''),
     password: new FormControl('')
  })
   login(){
    if(!this.loginForm.value.username){
      alert("Username is required")
      return;
    }
    if(!this.loginForm.value.password){
      alert("Password is required")
      return;
    }
    let current_user = this.loginForm.value.username 
    let current_pass = this.loginForm.value.password
    if(current_user==="Admin" && current_pass==="1234"){
      localStorage.setItem("loggedUser",JSON.stringify({...this.loginForm.value,isAdmin: true}))
      this.loginForm.reset()
      setTimeout(() => alert("Login Successful"),100);
      this.router.navigate(["/dashboard"])
      return;
    }
    let usersList = window.localStorage.getItem("users")
    if(usersList){
      let parsedUsers = JSON.parse(usersList)
      if(parsedUsers.some((user: User) =>user.username===current_user)){
        localStorage.setItem('loggedUser',JSON.stringify({...this.loginForm.value,isAdmin: false}))
        this.loginForm.reset()
        setTimeout(() => {
          alert("Login Successful as User")
        },100)
        this.router.navigate(['/dashboard'])
        return;
      }
      else{
        alert("Invalid Username")
        this.loginForm.reset()
      }
    }
    else{
      alert("Invalid Username or Password")
      this.loginForm.reset()
    }
    // console.log('Username: '+this.loginForm.value.username+", Password: "+this.loginForm.value.password)
    return;
  }
}
