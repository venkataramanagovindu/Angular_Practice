import { Component, OnInit } from '@angular/core';
import { MyCustomPipePipe } from 'src/MyCustomPipe.pipe';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  data = 'some data for pipes';
  toggle = true;
  selectDropdown ;
  object = {
    name : 'Venkat',
    ID : 1895
  };

  date: Date = new Date();
  ngOnInit() {
  }

  changeDateFormat(eve) {

  }

  get format(){
    return this.toggle ? 'shortDate' : 'longDate';
  }
  toggleFormat(){
    this.toggle = !this.toggle;
  }
}
