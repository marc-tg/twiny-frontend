import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  posts :any[] = [];

  constructor(private postsService: PostsService) {
    this.getPosts();
   }
    
  getPosts() {
    this.postsService.getPosts().subscribe(
      (response) => {
        console.log('Posts received:', response);
        this.posts = response;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

}
