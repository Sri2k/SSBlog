import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  posts: Post[] = [];
  isLoading = true;

  constructor(
    private readonly router: Router,
    private readonly api: PostService) { }

  ngOnInit() {
    this.api.getPosts()
      .subscribe((res: any) => {
        this.posts = this.sortPostsByDate(res);
        console.log(this.posts)
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
  }

  private sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort((post1, post2) => {
      return new Date(post2.createdAt).getTime() - new Date(post1.createdAt).getTime();
    });
  }

  createBlog() {
    this.router.navigateByUrl('/post/create')
  }

  getTimeDifference(createdAt: any): string {
    const createdAtDate = new Date(createdAt);
    const now = Date.now();
    const timeDifferenceMs = now - createdAtDate.getTime();
    const timeDifferenceMinutes = Math.floor(timeDifferenceMs / (1000 * 60));

    if (timeDifferenceMinutes < 1440) {
      return `${timeDifferenceMinutes} minutes ago`; // Less than 24 hours
    } else {
      const timeDifferenceDays = Math.floor(timeDifferenceMinutes / 1440);
      return `${timeDifferenceDays} days ago`; // 24 hours = 1440 minutes
    }
  }
  
}
