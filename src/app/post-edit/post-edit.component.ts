import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
})
export class PostEditComponent {
  form!: FormGroup
  index: number = 0
  editMode: boolean = false

  title: string = ''
  description: string = ''
  imagePath: string = ''

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index']

        const post = this.postService.getPost(this.index)

        this.title = post.title
        this.description = post.description
        this.imagePath = post.imagePath

        this.editMode = true
      }
    })

    this.form = new FormGroup({
      title: new FormControl(this.title, Validators.required),
      description: new FormControl(this.description, [
        Validators.required,
        Validators.maxLength(5),
      ]),
      imagePath: new FormControl(this.imagePath, Validators.required),
    });
  }

  onSubmit(): void {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post(
      title,
      description,
      imagePath,
      'author2',
      new Date()
    );

    if (this.editMode) {
      this.postService.updatePost(this.index, post)
    } else {
      this.postService.addPost(post);
    }

    this.router.navigate(['/post-list']);
  }
}
