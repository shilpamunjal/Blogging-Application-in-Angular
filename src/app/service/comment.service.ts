import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASIC_URL="http://localhost:8088/";
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  createComment(postid:number,postedBy:string,content:string):Observable<any>{
    const params={
      postid:postid,
      postedBy:postedBy
    }
    return this.http.post(BASIC_URL+`api/comments/create`,content,{params});
  }

  getAllCommentsByPostId(postid:number):Observable<any>{
    console.log("comment service"+postid);
    return this.http.get(BASIC_URL+`api/comments/${postid}`);

  }
}
