import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-edit',
  templateUrl: './major-edit.component.html',
  styleUrls: ['./major-edit.component.css']
})
export class MajorEditComponent implements OnInit {

  major: Major = new Major();

  save(): void{
    this.majorsvc.change(this.major).subscribe(
      res =>{
        console.debug("Major: change successful",res);
        this.router.navigateByUrl("/majors/list");
      },
      err => {
        console.error("Error: changing major",err);
      }
    )

  }
  constructor(
    private majorsvc: MajorService,// injects service
    private route: ActivatedRoute, //sends us into
    private router: Router// sends us back to menu when done
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.majorsvc.get(id).subscribe(
      res => {
        this.major = res;
        console.debug("Major:", res);
      },
      err => {
        console.error("Error editing major:",err)
      }

    );
    
  }

}
