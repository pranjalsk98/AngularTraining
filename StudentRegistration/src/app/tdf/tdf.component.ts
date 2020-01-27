import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  topics=['Angular','React','Javascript'];

  constructor() { }

  ngOnInit() {
  }
  userModel= new User('','rob@test.com',6565845478,'','morning',true);

  onSubmit(formModel:any):void{
    console.log(formModel);
  }
}
