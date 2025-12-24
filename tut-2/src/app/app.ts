import { UpperCasePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, UpperCasePipe, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected title = 'tut-2';

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  getFormData() {
    console.log(this.userForm.get('name')?.errors);
    console.log(this.userForm.get('email')?.errors);
    console.log(this.userForm.get('password')?.errors);
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();   // sari field ko touch kar dega.
      // console.log(this.userForm.get('name')?.errors);
      // console.log(this.userForm.get('email')?.errors);
      // console.log(this.userForm.get('password')?.errors);
    } else {
      console.log(this.userForm.value);
    }
  }
}
