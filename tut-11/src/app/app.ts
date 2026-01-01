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
  
  protected title = 'tut-11';

  userForm!:FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      gender : new FormControl('male'),  // default value is male
      agree: new FormControl(true),    //   default value is checked 
    })
  }

  getFromData(){
    console.log(this.userForm.value);
  }
}
