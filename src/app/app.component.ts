import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogSite';
  adminList:any[] = [{username: "Admin",password: "1234"}];
  userstring: string | null = window.localStorage.getItem('loggedUser');
  loggedUser: {} | null = null;
  
  constructor(){
    window.localStorage.setItem('admin_list',JSON.stringify(this.adminList))
    // this.loggedUser = this.userstring?JSON.parse(this.userstring):null
  }
}
