import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from "@angular/router";
import { MatCard } from '@angular/material/card';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
postform!:FormGroup;
tags:string[]=[];

  constructor(private fb:FormBuilder,private router:Router,private snackbar:MatSnackBar,private postService:PostService){

    
  }
  ngOnInit(){
    this.postform=this.fb.group({
      name:[null,Validators.required],
      content:[null,[Validators.required,Validators.maxLength(5000)]],
      img:[null,Validators.required],
      postedBy:[null,Validators.required]
    
    }

    )
  }

  add(event:any){

    const value=(event.value||'').trim();
    if(value){
      this.tags.push(value);
    }
    event.chipinput!.clear();

  }


  remove(tag:any){
    const index=this.tags.indexOf(tag);
    if(index>=0){
      this.tags.splice(index,1);
    }

  }
  createPost(){
  
    const data=this.postform.value;
    
    this.postService.createNewPost(data).subscribe(res=>console.log("Hi"));
    
    
  }

}
