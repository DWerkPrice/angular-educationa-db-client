import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student.class';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student: Student = new Student();



  constructor(
    private route: ActivatedRoute,
    private studsvc: StudentService
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

    )

  }

}