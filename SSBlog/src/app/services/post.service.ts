import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Post } from '../model/post';


const apiURL = 'http://localhost:3000/posts/';
// const apiURL = './../assets/api/db.json';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(payload: any): Observable<Post> {
    const url = `${apiURL}`;
    return this.http.post<any>(url, payload).pipe(
      tap(_ => this.log(`fetched post by payload=${payload}`)),
      catchError(this.handleError<Post>(`getPost id=${payload}`))
    );
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(apiURL).pipe(
        tap(() => this.log('Posts fetched')),
        catchError(this.handleError('getPosts', []))
      );
  }

  getPost(id: any): Observable<Post> {
    const url = `${apiURL}${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log(`fetched post by id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
