import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.class';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  
  searchCriteria: string = '';
  
  constructor(
    private student : StudentService
    ) { }

  ngOnInit(): void {
    this.student.list().subscribe(
      res => {
        this.students = res;
        console.debug("Student-list Users:",res);}
      ,err => {console.error(err);}
    );
  }
}
