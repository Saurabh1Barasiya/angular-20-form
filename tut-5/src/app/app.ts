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
  
  protected title = 'tut-5';

  userForm!:FormGroup;
  ngOnInit(): void {
    this.userForm = new FormGroup({

      person:new FormGroup({
        name:new FormControl('',[Validators.required,Validators.minLength(6)]),
        email:new FormControl('',[Validators.required,Validators.email]),
      }),

      security:new FormGroup({
        password:new FormControl('',[Validators.required]),
        confirmPassword:new FormControl('',[Validators.required])
      })
    })
  }

  getData(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }

    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
}
