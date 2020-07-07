import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DespAndAnswerInterface } from 'src/app/entity/despAndAnswer.interface';

@Injectable({
  providedIn: 'root'
})
export class DespAndAnsProviderService {

  private url = 'assets/data/answers.json';

  constructor(private http: HttpClient) { }

  /**
   * this method is used to get data from Ansers.json and send it to components.
   */
  getDescription(): Observable<DespAndAnswerInterface[]> {
    return this.http.get<DespAndAnswerInterface[]>(this.url);
  }
}
