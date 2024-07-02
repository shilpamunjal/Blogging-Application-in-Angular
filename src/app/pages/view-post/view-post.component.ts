import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {
  postId=this.activatedroute.snapshot.params['id'];
  postData:any;

  constructor(private postservice:PostService,private activatedroute:ActivatedRoute){}
  ngOnInit(){
    console.log(this.postId);
    this.getPostById();
  }
  getPostById(){
  this.postservice.getPostById(this.postId).subscribe(res =>{
    
    this.postData=res;
    console.log(this.postData);
  })
    
  }
  likePost(){
    this.postservice.likePost(this.postId).subscribe(res=>{this.getPostById();})
   
  }


}
