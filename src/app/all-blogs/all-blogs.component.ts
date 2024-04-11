import { Component } from '@angular/core';
import { Blog } from '../class/Blog';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent {
    blogs: Blog[] = [];
    constructor(){
      let list = [];
      let prevList = window.localStorage.getItem('blogs')
      if(prevList !== null){
        list = JSON.parse(prevList)
      }
      list = list.filter((each: Blog) => each.isPrivate===undefined || each.isPrivate===false)
      this.blogs = list;
    }

    searchText: string = "";

    onSearchTextEntered(searchValue: string){
      this.searchText = searchValue;
      // console.log(this.searchText)
    }
}
