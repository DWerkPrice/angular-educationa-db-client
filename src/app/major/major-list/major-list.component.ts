import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.css']
})
export class MajorListComponent implements OnInit {

  majors: Major[] = [];
  
  constructor(
    private major: MajorService// we create a primary of the class
  ) { }

  ngOnInit(): void {
    this.major.list().subscribe(
      res => { 
        this.majors = res;
        console.debug("Major-list Users:",res);}//changed log to debug
      ,err => {console.error(err);}
    );
  }

}
