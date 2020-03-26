import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {

  major: Major = new Major();

  changeMinSat(): void {
    if(this.major.minSat <=  1000) {
      this.major.minSat += 100;
    } else { 
      this.major.minSat += 50;
    }
    this.majorsvc.change(this.major).subscribe(
        res =>{
           console.log ("Changed minSat ok");
        },
        err => {
          console.error("error changing minSat", err);
        }
    );
  }

  delete(): void {
    this.majorsvc.remove(this.major).subscribe(
      res => {
        console.debug("Major delete successful!",res);
        this.router.navigateByUrl("/majors/list");  // routes you back to menu after successful create
      },
      err => {
        console.error("Major delete failed!",err);
      }
    );

  }

  constructor(
    private route: ActivatedRoute,
    private majorsvc: MajorService,
     private router: Router
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;  //activated route which gives us the id passed in
    this.majorsvc.get(id).subscribe(
      res => {
        this.major = res;
        console.debug("Major:", res);
      },
      err => {

        console.error("Error on Major.get()",err);
      }
    );
  }

}
