import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPwdComponent } from './components/forget-pwd/forget-pwd.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';
import { SignupComponent } from './components/signup/signup.component';
import { autGuard } from './guards/aut.guard';
import { ErrorComponent } from './components/error/error.component';

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
    canActivate: [autGuard]
  },
  {
    path: "post/create",
    component: CreatePostComponent,
    canActivate: [autGuard]
  },
  {
    path: "post/details/:id",
    component: PostDetailsComponent,
    canActivate: [autGuard]

  },
  {
    path: "comments/:id/edit",
    component: EditCommentComponent,
    canActivate: [autGuard]

  },
  {
    path: "**",
    component: ErrorComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
