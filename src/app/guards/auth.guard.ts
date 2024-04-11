import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import {Router} from '@angular/router'
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isAdmin = () => {
    let loggedUser =  window.localStorage.getItem('loggedUser')
    if(loggedUser === null){
      return false;
    }
    let user = JSON.parse(loggedUser)
    return user.isAdmin;
  }
  return isAdmin()
};

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = () => {
    let loggedUser =  window.localStorage.getItem('loggedUser')
    if(loggedUser === null){
      // console.log("im here")
      router.navigate(['/login'])
      return false;
    }
    let user = JSON.parse(loggedUser)
    return true;
  }
  return isLoggedIn()
};


export const mainGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = () => {
    let loggedUser =  window.localStorage.getItem('loggedUser')
    if(loggedUser !== null){
      console.log("im here")
      return false;
    }
    return true;
  }
  return isLoggedIn()
};