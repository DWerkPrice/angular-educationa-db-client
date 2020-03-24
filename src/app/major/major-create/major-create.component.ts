import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-create',
  templateUrl: './major-create.component.html',
  styleUrls: ['./major-create.component.css']
})
export class MajorCreateComponent implements OnInit {

  major: Major = new Major(); // step 3 create instance to inject

  save(): void{
    this.majorsvc.create(this.major).subscribe(
      res=>{
        // this.major.minSat = Number{this.major.minSat};  alternative way of handling 400 error of not numeric
        console.debug("Major created",res);
        this.router.navigateByUrl("/majors/list");  // routes you back to menu after successful create
      },
      err => {
        console.error("ERROR creating major:",err);
      }
    );
  }

  constructor(
    private majorsvc: MajorService, // injecting service step 1
    private router: Router // lets us programaticly navigate step 2
    ) { }

  ngOnInit(): void {
     this.major.minSat = 800;
  }

}
