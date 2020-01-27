import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  name="Pranjal";
  email="test@gmail.com";
  flag=true;
  phone= "123647"
  id="12"
  fathername="Mr. Singh"
  mothername="Mrs Singh"
  constructor() {}

  ngOnInit() {
  }

}
