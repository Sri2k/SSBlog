import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';

import { Post } from '../../model/post';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  editEnable!:boolean;

  post: any = {
    id: '',
    heading: '',
    subHeading: '',
    section1: '',
    section2: '',
    section3: '',
    sectionHeading: '',
    createdAt: null
  };
  comments: Comment[] = [];
  isLoading = true;

  constructor(private route: ActivatedRoute, private apiPost: PostService,
              private apiComment: CommentService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getPostDetails(this.route.snapshot.params['id']);
    this.isEditingEnableCheck();

  }

  getPostDetails(id: any) {
    console.log(id+'noob')
    this.apiPost.getPost(id)
      .subscribe((data: any) => {
        this.post = data;
        console.log('this.post', this.post)
        this.getCommentsByPostId();
        this.isLoading = false;
      });
  }

  getCommentsByPostId() {
    this.apiComment.getCommentsByPostId(this.post.id)
      .subscribe((res: any) => {
        this.comments = res;
      }, err => {
        console.log(err);
      });
  }

  openModal(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  closeModal() {
     this.modalService.dismissAll();
  }
  
  private isEditingEnableCheck(){
    this.apiComment.getallComments().subscribe({
      next:(response:any)=>{
        console.log('nooooob')
        console.log(response)
        this.editEnable=response.some((x:any)=>x.userId == sessionStorage.getItem('userId'))
      }
    }
    )
  }
}
