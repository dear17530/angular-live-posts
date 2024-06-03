import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
  listOfPost: Post[] = [
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

  getPosts() {
    return this.listOfPost;
  }

  deletePost(index: number) {
    this.listOfPost.splice(index, 1);
  }

  addPost(post: Post) {
    this.listOfPost.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPost[index] = post;
  }
}