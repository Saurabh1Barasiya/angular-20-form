import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected title = 'tut-1';
  userForm!:FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('',[Validators.required,Validators.minLength(6),Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  getFormData(){
    // console.log("form submitted");
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }
}
