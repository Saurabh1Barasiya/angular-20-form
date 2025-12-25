import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected title = 'tut-8';
  userForm !: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      address:new FormControl('')
    })
  }

  setDefault(){
    // yaha par hamko vo sare field dena mandatory h jo hamne form bante time use kiya tha.
    this.userForm.setValue({
      name:"saurabh",
      email:"saruabh@gmail.com",
      address:"harrai chhindwara"
    })
  }
}
