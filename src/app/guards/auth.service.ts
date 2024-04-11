import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAdmin() {
    let loggedUser =  window.localStorage.getItem('loggedUser')
    if(loggedUser === null){
      return false;
    }
    let user = JSON.parse(loggedUser)
    return user.isAdmin;
  }
}
