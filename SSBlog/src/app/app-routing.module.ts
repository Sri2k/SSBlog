import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPwdComponent } from './components/forget-pwd/forget-pwd.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent 
  },
  {
    path: 'signup', component: SignupComponent 
  }, 
  {
    path: "forgot-password",
    component: ForgetPwdComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "post/create",
    component: CreatePostComponent,
  },
  {
    path: "post/details/:id",
    component: PostDetailsComponent,
  },
  {
    path: "comments/:id/edit",
    component: EditCommentComponent,
  },
  {
    path: "**",
    component: LoginComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
