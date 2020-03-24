import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../student.class';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = new Student();

  save(): void{
    this.studentsvc.create(this.student).subscribe(
      res=>{
        console.debug("Student created",res);
        this.router.navigateByUrl("/students/list");
      },
      err => {
        console.error("ERROR creating student",err);
      }
    );
  }

  constructor(
    private studentsvc: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
