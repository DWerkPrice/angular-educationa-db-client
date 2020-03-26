import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-checkcode',
  templateUrl: './check-code.component.html',
  styleUrls: ['./check-code.component.css']
})
export class CheckCodeComponent implements OnInit {

  major: Major= new Major();
  message: string = '';

  check(): void {
    this.majorsvc.checkCode(this.major.code).subscribe(
      res  => {
        this.major = res;
        globalThis.message = this.major.name;
        console.debug("Major: ", res);
      },
       err => { 
         this.message = "not found";
          console.debug("not found", err);
       }
    );
  }
  constructor(
    private majorsvc: MajorService
  ) { }

  ngOnInit(): void {
  }

}
