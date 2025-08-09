import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

likes: any[] = [];
  posts :any[] = [];
  likesPosts: number = 0;
  
  constructor(private postsService: PostsService, private likeService: LikeService) {
    this.getPosts();
    this.getLikes();
    

   }
likesCountMap: { [postId: string]: number } = {};

getLikes() {
  this.likeService.getLikes().subscribe(
    (response: any[]) => {
      this.likes = response;

      // Reiniciar mapa
      this.likesCountMap = {};

      // Contar likes por postId
      for (const like of this.likes) {
        const pid = like.post_id.toString();
        if (this.likesCountMap[pid]) {
          this.likesCountMap[pid]++;
        } else {
          this.likesCountMap[pid] = 1;
        }
      }

      console.log('Likes contados por post:', this.likesCountMap);
    },
    (error) => {
      console.error('Error al cargar likes:', error);
    }
  );
}

getPostLikes(postId: string) {
  return this.likesCountMap[postId] || 0;
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
