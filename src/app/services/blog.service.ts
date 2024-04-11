import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Blog } from '../class/Blog';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogData = new BehaviorSubject<Blog | null>(null);
  currentBlogData = this.blogData.asObservable()
  constructor(private router: Router) { }

  userAddEvent = new Subject<boolean>()

  setBlogData(blog: Blog){
    this.blogData.next(blog)
    this.router.navigateByUrl('/create-blog')
  }

  addUser(){
    console.log("hi")
    this.userAddEvent.next(true)
  }
  
  clearBlogData(){
    this.blogData.next(null)
  }
}
