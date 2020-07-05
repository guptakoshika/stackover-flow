import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentsInterface } from 'src/app/entity/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentProviderService {

  private url = 'assets/data/comments.json';

  constructor(private http: HttpClient) { }

  getComments(): Observable<CommentsInterface[]> {
    return this.http.get<CommentsInterface[]>(this.url);
  }
}
