import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.class';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student = new Student();

  delete(): void {
    this.studsvc.remove(this.student).subscribe(
      res => {
        console.debug("Student delete successful!", res);
        this.router.navigateByUrl("/students/list");
      },
      err => {
        console.error("Error doing student delete", err);
      }
    );
  }


  constructor(
    private route: ActivatedRoute,
    private studsvc: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.studsvc.get(id).subscribe(
      res => {
        this.student = res;
        console.debug("Student:", res);

      },
      err => {
      console.error("Error debug student get",err);
      }
    );
  }

}
