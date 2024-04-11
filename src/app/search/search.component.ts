import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchedValue: string = "";
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchedValue);
  }

}
