import { Component } from '@angular/core';
import { Blog } from '../class/Blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-display-blogs',
  templateUrl: './display-blogs.component.html',
  styleUrls: ['./display-blogs.component.scss']
})
export class DisplayBlogsComponent {
    blogs: Blog[] = [];
    constructor(private blogService: BlogService) {
      let list = [];
      let prevList = window.localStorage.getItem('blogs')
      if(prevList !== null){
        list = JSON.parse(prevList)
        let cur_user_details = window.localStorage.getItem("loggedUser")
        let cur_user = cur_user_details?JSON.parse(cur_user_details).username:""
        list = list.filter((eachBlog:any) => eachBlog.username === cur_user)
      }
      this.blogs = list;
      console.log("Hi",this.blogs)
    }


    editBlog(blog: Blog){
      this.blogService.setBlogData(blog)
    }
    deleteBlog(blog: Blog){
      let prevBlogs = window.localStorage.getItem('blogs')
      if(prevBlogs!==null){
        let parsedBlogs: Blog[] = JSON.parse(prevBlogs)
        // console.log(prevBlogs, typeof prevBlogs)
        console.log(blog,parsedBlogs)
        const index = parsedBlogs.findIndex((each:Blog) => each.id === blog.id)
        // const index = parsedBlogs.indexOf(blog)
        console.log(index)
        if(index !== -1){
          parsedBlogs.splice(index,1)
          window.localStorage.setItem('blogs',JSON.stringify(parsedBlogs))
          this.blogs = parsedBlogs 
          setTimeout(() => {
            alert("Blog deleted")
          },100)
        }
      }
    }
}
