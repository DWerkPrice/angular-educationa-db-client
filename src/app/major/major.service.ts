import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //added automatically
import { Observable } from 'rxjs';
import { Major } from './major.class';
import { $ } from 'protractor';

const url: string = "http://localhost:5000/api/majors";//added this


@Injectable({
  providedIn: 'root'
})
export class MajorService {

  list(): Observable<Major[]>{ // added this function
    return this.http.get(`${url}`) as Observable<Major[]>;
  }
  get(id: any): Observable<Major>{ // added this function
    return this.http.get(`${url}/${id}`) as Observable<Major>;
  }
  create(major: Major): Observable<Major>{ 
    // added this function
    return this.http.post(`${url}`, major) as Observable<Major>;
  }
  change(major: Major): Observable<any>{ // added this function
    return this.http.put(`${url}/${major.id}`, major) as Observable<Major>;
  }
  remove(major: Major): Observable<any>{ // added this function
    return this.http.delete(`${url}/${major.id}`) as Observable<any>;
  }
  constructor(// dependency injection constructor
    private http: HttpClient
    ) { }
}
