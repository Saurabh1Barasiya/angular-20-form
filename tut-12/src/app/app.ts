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

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl(''),
      gender:new FormControl('male'),
      hobbies:new FormGroup({
        cricket:new FormControl(false),
        movie:new FormControl(false),
        reading:new FormControl(false)
      })
    })
  }

  protected title = 'tut-12';

  userForm!:FormGroup;

  getFormData(){
    console.log(this.userForm.value);
  }

}
