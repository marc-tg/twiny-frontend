import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { LikeService } from '../../services/like.service';
import { NewsService } from '../../services/news.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {

  likes: any[] = [];
  posts: any[] = [];
  likesPosts: number = 0;
  news: any[] = []; // Array para almacenar las noticias
  comments: any[] = []; 

  twentylastNews: any[] = []; // Array para almacenar las últimas noticias
  constructor(private commentsService:CommentService ,private postsService: PostsService, private likeService: LikeService, private newsService: NewsService) {
    this.getPosts();
    this.getLikes();
    this.getNews();

  }
  likesCountMap: { [postId: string]: number } = {};

  postLike(idUser: any, idPost: any) {
    this.likeService.hasLike(idUser, idPost).subscribe(
      (response: any) => {
        console.log('Like received:', response);

        if (response.hasLike) {
          // Si ya tiene like, borrar like
          this.likeService.deleteLike(idUser, idPost).subscribe(
            (resp) => {
              console.log('Like deleted:', resp);
              this.getLikes();
            },
            (err) => console.error('Error deleting like:', err)
          );
        } else {
          // Si no tiene like, dar like
          this.likeService.giveLike(idUser, idPost).subscribe(
            (resp) => {
              console.log('Like given:', resp);
              this.getLikes();
            },
            (err) => console.error('Error giving like:', err)
          );
        }
      },
      (error) => {
        console.error('Error fetching like:', error);
      }
    );
  }


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

  getNews() {
    this.newsService.getNews().subscribe(
      (response) => {
        console.log('News received:', response);
        this.news = response.articles; // Asumiendo que la respuesta tiene un campo 'articles'
        this.twentylastNews = this.news.slice(0, 10); // Tomar las últimas 20 noticias
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }

  toggleComments($idPost: any) {
    this.commentsService.getPostComments($idPost).subscribe(
      (response: any) => {
        console.log('Comments received:', response);
        this.comments = response;
        const commentsDiv = document.getElementById($idPost);
        if (commentsDiv) {
          commentsDiv.classList.toggle('d-none');
        }
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
    }
    

  }


