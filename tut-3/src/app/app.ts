import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { passwordMather } from './Validators/password-matcher.validators';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected title = 'tut-3';

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: passwordMather }  // isko ham form leval validation bolte hai.
    )
  }

  getFormData(){
    console.log(this.userForm.value);
  }

}
