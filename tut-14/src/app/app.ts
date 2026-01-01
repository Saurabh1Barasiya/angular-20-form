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
  
  protected title = 'tut-14';

  userForm !: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required])
    })
  }

  getFormData(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
    }else{
      console.log(this.userForm.value)
    }
  }
}
