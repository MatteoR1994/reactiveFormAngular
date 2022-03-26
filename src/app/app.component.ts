import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public formData?: any;

  // public formData = {
  //   username: 'StephenKing2022',
  //   password: 'ciaomondocomeva',
  //   name: 'Matteo',
  //   surname: 'Rinaldi',
  //   email: 'grifo94@email.it',
  //   phone: '3496245067',
  //   gender: 'male'
  // };

  public form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    gender: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.formData = this.form.value;
  }
  
}