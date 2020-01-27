import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName : ['',[Validators.required,Validators.minLength(3)]],
    fName : ['',[Validators.required,Validators.minLength(3)]],
    lName : ['',[Validators.required,Validators.minLength(3)]],
    email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],  
    phone : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    city : ['',[Validators.required,Validators.minLength(2)]],
    state : ['',[Validators.required,Validators.minLength(2)]]
  });
  ngOnInit() {
  }

}
