import { Component } from '@angular/core';
import { Post } from '../post.model';

import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  listOfPosts: Post[] = [
    new Post(
      'title1', 'desc1', 'https://fakeimg.pl/300/', 'author1', new Date()
    ),
    new Post(
      'title2', 'desc2', 'https://fakeimg.pl/300/', 'author2', new Date()
    ),
    new Post(
      'title3', 'desc3', 'https://fakeimg.pl/300/', 'author3', new Date()
    )
  ]
}
