import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit{

  @Input() comment: Comment = {
    id: 0,
    postId: 0,
    parent_id: null,
    user: '',
    date: null,
    content: ''
  };
  editEnable!:boolean;
  constructor(private api: CommentService, private router: Router) { }
  ngOnInit(): void {
    //this.isEditingEnableCheck();
  }

  deleteComment() {
    this.api.deleteCommentById(this.comment.id)
      .subscribe(() => {
        this.refresh();
        this.router.navigate([this.router.url]);
      });
  }

  editComment() {
    this.router.navigate([`/comments/${this.comment.id}/edit`]);
  }

  private refresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  private isEditingEnableCheck(){
    this.api.getallComments().subscribe({
      next:(response:any)=>{
        console.log('nooooob')
        console.log(response)
        this.editEnable=response.some((x:any)=>x.userId == sessionStorage.getItem('userId'))
      }
    }
    )
  }

}
