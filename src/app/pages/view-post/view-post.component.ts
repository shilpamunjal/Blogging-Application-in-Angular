import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {
  postId=this.activatedroute.snapshot.params['id'];
  postData:any;
  commentForm!:FormGroup;

  constructor(private postservice:PostService,private activatedroute:ActivatedRoute,private fb:FormBuilder,private commentservice:CommentService){}
  ngOnInit(){
    console.log(this.postId);
    this.getPostById();
    this.commentForm=this.fb.group({
      postedBy:[null,Validators.required],
      content:[null,Validators.required]
    })
  }

  publishComment(){
    console.log("publish comment");
    const postedBy=this.commentForm.get('postedBy')?.value;
    const content=this.commentForm.get('content')?.value;
    console.log(content);
    this.commentservice.createComment(this.postId,postedBy,content).subscribe(res=>console.log(res));
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
