import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {
  allPosts:any;

  constructor(private postservice:PostService){

  }
  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    
    this.postservice.getAllPosts().subscribe(res=>{console.log(res);
      this.allPosts=res;
    });
  }

}
