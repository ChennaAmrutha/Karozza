import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  sampleForm : FormGroup;
  constructor( private fb : FormBuilder ) { }

  ngOnInit() {
    this.sampleForm = this.fb.group({
      name : ['', [Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      comment : ['',[Validators.required]],
      sel: ['',[Validators.required]]
    });
  }

}
