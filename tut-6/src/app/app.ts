import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected title = 'tut-6';

  userForm!:FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('',[Validators.required]),

      // create a formArray.
      skills : new FormArray([
        new FormControl('',[Validators.required])
      ])
    })
  }

  get skills():FormArray{
    return this.userForm.get('skills') as FormArray;
  }

  addSkills(){
    this.skills.push(new FormControl('',[Validators.required]));
  }

  removeSkill(index:number){
    // if(this.skills.length > 1){
    //   this.skills.removeAt(index);
    // }

    this.skills.removeAt(index);
  }

  getFormData(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    console.log(this.userForm.value);

  }
}
