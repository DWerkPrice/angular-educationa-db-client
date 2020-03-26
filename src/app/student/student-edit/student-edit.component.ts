import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from 'src/app/major/major.service';
import { Student } from '../student.class';
import { Major } from 'src/app/major/major.class';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = new Student();
  majors: Major[]=[];

  save(): void { 
    this.student.majorId = Number(this.student.majorId);
    this.studentsvc.change(this.student).subscribe(
      res => {
        console.debug("Student change successful!: ", res);
        this.router.navigateByUrl("/students/list");
      },
      err => {
        console.error("Error changing student", err);
      }
    );
  }
    
  constructor(
    private studentsvc: StudentService,
    private majorsvc: MajorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.majorsvc.list().subscribe(
      res=> {
        this.majors = res;
        console.debug("majors:", res);
      },
      err => {
        console.error("Error reading student", err);
      }
    );
    let id = this.route.snapshot.params.id;
    this.studentsvc.get(id).subscribe(
      res  => {
        this.student = res;
        console.debug("Student:",res);
      },
      err => { 
        console.debug("Error reading student",err);
      }
    );
  }
}
