import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss'
})
export class SearchByNameComponent {
  results:any=[];
  name:any="" ;
  
  constructor(private postService:PostService){

}
searchByName(){
  this.postService.searchByName(this.name).subscribe(res=>{
    this.results=res;
  })}

}
