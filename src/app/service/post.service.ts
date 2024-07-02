import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASIC_URL="http://localhost:8088/";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  createNewPost(data:any):Observable<any>{
    console.log("hi service file");
    return this.http.post(BASIC_URL+`api/post`,data);
   
  }

 getAllPosts():Observable<any>{
    console.log("hi service file");
    return this.http.get(BASIC_URL+`api/post`);
   
  }
  getPostById(postId:any):Observable<any>{
    console.log("hi service file");
    return this.http.get(BASIC_URL+`api/post/${postId}`);
   
  }

  likePost(postId:number):Observable<any>{
    return this.http.put(BASIC_URL+`api/post/${postId}/like`,{});
    
  }
}
