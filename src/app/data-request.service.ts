import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SingleResult } from './single-result';
import { PostResult } from './post-result';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  private readonly redditUrl = 'https://www.reddit.com/r/aww/.json';


getPosts(): Observable<SingleResult[]> {
  return this.http
  .get<PostResult>(this.redditUrl)
  .pipe(map((response) => response.data.children));
  }

}
