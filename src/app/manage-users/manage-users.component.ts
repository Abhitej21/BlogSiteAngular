import { Component } from '@angular/core';
import { User } from '../class/User';
import { v4 as uuidv4} from 'uuid'
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {
  users: User[] = [];
  userAdded: boolean = false;
  currentUsersList: User[] =  [];
  reactiveForm: FormGroup;
  showMsg: boolean = false;
  doDisplay: boolean = true;
  constructor(private router: Router,private blogService: BlogService){
      
  }

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      type: new FormControl('default'),

    })
    let prevUsers = window.localStorage.getItem('users')
      if(prevUsers){
        let parsedUsers = JSON.parse(prevUsers)
        this.currentUsersList = parsedUsers;
        this.users = this.currentUsersList;
      }
      this.blogService.userAddEvent.subscribe((data) => {
        this.userAdded = data;
      })
  }

  addUser(){
    let prevList = window.localStorage.getItem('users')
    if(!this.reactiveForm.valid){
      alert("Invalid User details")
      return;
    }
    if(this.reactiveForm.value.type == "default"){
      alert("Select user type")
      return;
    }
    console.log(this.reactiveForm.value)
    let newObj;
    if(prevList){
      let parsedUsers = JSON.parse(prevList)
      newObj = {...this.reactiveForm.value,id: uuidv4()}
      let isExistIndex = parsedUsers.findIndex((each: User) => each.username === newObj.username)
      if(isExistIndex!== -1){
        alert("User already exists")
        this.reactiveForm.reset()
        this.reactiveForm.setValue({username: null,email: null,type: 'default'})
        // this.reactiveForm.setValue({username: '',email: '',type: 'user'})
        return;
      }
      parsedUsers.push(newObj)
      window.localStorage.setItem('users',JSON.stringify(parsedUsers))
      this.users = parsedUsers;
      this.reactiveForm.setValue({username: null,email: null,type: 'user'})
      this.doDisplay = false;
      this.blogService.addUser()
      
    }
    else{
      newObj = {...this.reactiveForm.value,id: uuidv4()}
      let newList = [newObj]
      window.localStorage.setItem('users',JSON.stringify(newList))
      this.users = newList;
    }
    
    this.showMsg = true;
    setTimeout(() => {
      this.showMsg = false;
    },2000)
    this.reactiveForm.setValue({username: null,email: null,type: 'default'})
    this.doDisplay = false;
  }

  deleteUser(id: string){
    let prevUsers = window.localStorage.getItem('users')
    if(prevUsers){
      let parsedUsers = JSON.parse(prevUsers)
      parsedUsers = parsedUsers.filter((each: User) => each.id !== id)
      this.users = parsedUsers;
      window.localStorage.setItem('users',JSON.stringify(parsedUsers))
      setTimeout(() => {
        alert("User deleted !!")
      },100)
    }
  }
  ngOnDestroy(){
    this.blogService.userAddEvent.unsubscribe()
  }

}
