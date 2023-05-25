import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';
import { SingleResult } from '../single-result';

@Component({
  selector: 'app-post-result',
  templateUrl: './post-result.component.html',
  styleUrls: ['./post-result.component.css']
})
export class PostResultComponent implements OnInit{

  constructor(private dataRequestService: DataRequestService) {}

  post: SingleResult[] = [];
  
    ngOnInit(): void {
      this.getAllPosts();
    }
  
    getAllPosts() {
      this.dataRequestService.getPosts().subscribe( (post) => {
        this.post = post;
        console.log(post)
      });
    }
  
  }
  