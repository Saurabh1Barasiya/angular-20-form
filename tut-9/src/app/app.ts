import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-9';

  userForm !: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    })
  }

  setName() {
    this.userForm.patchValue({
      name: "saurabh",
    })
  }

  setEmail(){
    this.userForm.patchValue({
      email:"saurabh@gmail.com",
    })
  }

  setAddress(){
    this.userForm.patchValue({
      address:"madhya pradesh",
    })
  }

  getData(){
    console.log(this.userForm.value);
  }
}
