import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent {
  @Input() post?: Post;
  @Input() index: number = -1

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void { }


  onDelete(): void {
    if (this.index < 0) return
    this.postService.deletePost(this.index)
  }

  onEdit(): void {
    this.router.navigate(['/post-edit', this.index])
  }
}
