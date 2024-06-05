import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss'
})
export class PostEditComponent {
  form!: FormGroup;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
    })
  }

  onSubmit(): void {
    const title = this.form.value.title
    const description = this.form.value.description
    const imagePath = this.form.value.imagePath

    const post: Post = new Post(title, description, imagePath, 'author2', new Date())
    this.postService.addPost(post)
    this.router.navigate(["/post-list"])
  }
}
