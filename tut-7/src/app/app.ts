import { UpperCasePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { atleastOneMethodRequired } from './validators/atLeastOne.validators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, UpperCasePipe, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'tut-7';

  userForm!:FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),

      userSkills:new FormArray(
        [
          new FormControl('') // ye initial show hoga.
        ],
        {validators:atleastOneMethodRequired}
      ) 
    })
  }

  get userSkills():FormArray{
    return this.userForm.get('userSkills') as FormArray;
  }

  addSkills(){
    this.userSkills.push(new FormControl(''));
  }

  removeSkills(index:number){
    this.userSkills.removeAt(index);
  }

  getFormData(){
    // console.log(this.userForm.value);
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched();
      return;
    }
    console.log(this.userForm.value);
  }
}
