import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'tut-4';
  userForm!:FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),

      address:new FormGroup({
        colony:new FormControl(''),
        city:new FormControl(''),
        district:new FormControl('')
      }),
    })
  }

  getData(){
    console.log(this.userForm.value);
  }
}
