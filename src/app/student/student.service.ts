import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.class';
import { StudentCreateComponent } from './student-create/student-create.component';

const url: string = "http://localhost:5000/api/students";//added this


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  list(): Observable<Student[]>{
    return this.http.get(`${url}`) as Observable<Student[]>;
  }
  get(id: any): Observable<Student>{
    return this.http.get(`${url}/${id}`) as Observable<Student>;
  }
  create(student: Student): Observable<Student>{ // added this function
    return this.http.post(`${url}`, student) as Observable<Student>;
  }
  change(student: Student): Observable<any>{ // added this function
    return this.http.put(`${url}/${student.id}`, student) as Observable<Student>;
  }
  remove(student: Student): Observable<any>{ // added this function
    return this.http.delete(`${url}/${student.id}`) as Observable<any>;
  }
  constructor(
    private http: HttpClient)
     { }
}
