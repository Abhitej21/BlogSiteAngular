import { Component, ViewChild } from '@angular/core';
import {v4 as uuidv4} from 'uuid';
import { Blog } from '../class/Blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {
    blogTitle: string = "";
    blogDescription: string = "";
    blogContent: string = "";
    uuid: string = "";
    isChecked: boolean = false;
    editableBlogData: Blog | null = null;
    isEdited: boolean = false;

    constructor(private blogService: BlogService){

    }


    @ViewChild('checkBox') checkBox: any;

    ngOnInit(){
      console.log("Hi")
      this.blogService.currentBlogData.subscribe((data) =>{
        if(data!==null){
          this.editableBlogData = data;
          if(data !== null){
            this.blogTitle = data.title;
            this.blogDescription = data.description;
            this.blogContent  = data.content;
            this.isEdited = true;
          }
        }

      })
    }
    submitBlog(){
      if(this.blogTitle == ""){
        alert("Please enter a blog title");
        return;
      }
      if(this.blogDescription == ""){
        alert("Please enter a blog description");
        return;
      }
      if(this.blogContent == ""){
        alert("Please enter a blog content");
        return;
      }
      
      let cur_user_details = window.localStorage.getItem("loggedUser")
      let cur_user = cur_user_details?JSON.parse(cur_user_details).username:""
      this.uuid = uuidv4()
      let newBlog = {
        title: this.blogTitle,
        description: this.blogDescription,
        content: this.blogContent,
        username: cur_user,
        id: this.uuid,
        isPrivate: this.isChecked,
      }
      let list;
      let prevList = window.localStorage.getItem('blogs')
      if(prevList === null){
        list = [{...newBlog}]
      }
      else{
        list = JSON.parse(prevList)
        list.push(newBlog)
      }
      console.log(list)
      window.localStorage.setItem('blogs',JSON.stringify(list))
      this.blogTitle = "";
      this.blogDescription = "";
      this.blogContent = "";
      this.checkBox.nativeElement.checked = false;
      this.isChecked = false;
    }

    submitEdits(){
      let id = this.editableBlogData?.id;
      let cur_user = this.editableBlogData?.username
      let prevBlogs = window.localStorage.getItem('blogs')
      if(prevBlogs !== null){
        let parsedBlogs = JSON.parse(prevBlogs)
        let index = parsedBlogs.findIndex((blog: Blog) => blog.id === id)
        console.log(index)
        let newObj = {
          title: this.blogTitle,
          description: this.blogDescription,
          content: this.blogContent,
          username: cur_user,
          id: id,
          isPrivate: this.isChecked
        }
        if(index !== -1){
          parsedBlogs.splice(index,1,newObj)
          window.localStorage.setItem('blogs',JSON.stringify(parsedBlogs))
          this.blogTitle = "";
          this.blogDescription = "";
          this.blogContent = "";
          this.editableBlogData = null;
          this.isEdited = false;
          this.isChecked = false;
          this.blogService.clearBlogData()
          
        }
      }
    }

    toggleOption(isChecked: boolean){
      this.isChecked = isChecked;
    }
}
