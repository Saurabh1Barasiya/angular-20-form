import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected title = 'tut-10';

  userForm!: FormGroup;

  ngOnInit(): void {

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })

    this.userForm.valueChanges.subscribe({
      next:(value)=>{
        console.log("now value is change",value);
      }
    })


    this.userForm.statusChanges.subscribe({
      next:(status)=>{
        console.log("status changes",status);
      }
    });

  }

}
