import { Component } from '@angular/core';
import { Post } from '../post.model';

import { PostComponent } from '../post/post.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  listOfPosts: Post[] = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.listOfPosts = this.postService.getPosts()
  }

}
