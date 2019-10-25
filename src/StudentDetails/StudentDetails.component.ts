import { Component, OnInit } from '@angular/core';
import {StudentService} from '../Student.service';
import { Student } from 'src/Student';

@Component({
  selector: 'app-StudentDetails',
  templateUrl: './StudentDetails.component.html',
  styleUrls: ['./StudentDetails.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private _StudentService : StudentService) { }
  students : Student[];
  ngOnInit() {
    this._StudentService.getStudents().subscribe((student) => {
      this.students = student;
    })
  }

}
