import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isAdmin: boolean = false;
  cur_username: string = "";
  constructor(private router: Router){
      let user = window.localStorage.getItem('loggedUser');
      if(user !== null){
        this.isAdmin = JSON.parse(user).isAdmin;
        this.cur_username = JSON.parse(user).username;
      }
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  signout(){
    const confimation = confirm('Are you sure you want to sign out')
    if(confimation){
      window.localStorage.removeItem("loggedUser")
      this.router.navigate(['/login'])
    }
  }
}
