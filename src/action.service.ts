import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from './Type';
import {Information} from './Information';
@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private readonly header: HttpHeaders;
  private doactionUrl = 'http://localhost:8080/api/v1';

  simplesearch(searchoption: string, searchcontent: string): Observable<Information> {
    const url = `${this.doactionUrl}/search/${searchoption}/${searchcontent}`;
    return this.http.get<Information>(url);
  }
  gethot(): Observable<string[]> {
    const url = `${this.doactionUrl}/hot`;
    return this.http.get<string[]>(url);
  }
  advancesearch(name: string, author: string, publisher: string, isbn: string, callno: string): Observable<Information> {
    if (name === '') { name = 'undefined'; }
    if (author === '') { author = 'undefined'; }
    if (publisher === '') { publisher = 'undefined'; }
    if (isbn === '') { isbn = 'undefined'; }
    if (callno === '') { callno = 'undefined'; }
    const url = `${this.doactionUrl}/adsearch/${name}/${author}/${publisher}/${isbn}/${callno}`;
    return this.http.get<Information>(url);
  }
  // tslint:disable-next-line:max-line-length
  fmsearch(name: string, author: string, publisher: string, isbn: string, callno: string, a: string, d: string, l: string, t: string): Observable<Information> {
    if (name === '') { name = 'undefined'; }
    if (author === '') { author = 'undefined'; }
    if (publisher === '') { publisher = 'undefined'; }
    if (isbn === '') { isbn = 'undefined'; }
    if (callno === '') { callno = 'undefined'; }
    if (a === '') { callno = 'undefined'; }
    if (d === '') { callno = 'undefined'; }
    if (t === '') { callno = 'undefined'; }
    if (l === '') { callno = 'undefined'; }
    const url = `${this.doactionUrl}/fmsearch/${name}/${author}/${publisher}/${isbn}/${callno}/${a}/${d}/${l}/${t}`;
    return this.http.get<Information>(url);
  }
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    });
  }

  addcomment(comment: string, isbn: string): Observable<HttpResponse<string>> {
    const url = `${this.doactionUrl}/addcomment`;
    return this.http.post<string>(url, null,
      {headers: this.header, observe: 'response', params: {comment, isbn}});
  }

  scomment(id: string): Observable<string[]>  {
    const url = `${this.doactionUrl}/comment/${id}`;
    return this.http.get<string[]>(url);
  }

  sconn(id: string): Observable<string[]> {
    const url = `${this.doactionUrl}/conn/${id}`;
    return this.http.get<string[]>(url);
  }
}
