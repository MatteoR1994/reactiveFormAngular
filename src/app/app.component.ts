import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  submitted = false;

  title = 'reactiveFormAngular';

  profileForm = this.fb.group({
    profileUsername: [null, Validators.required],
    profilePassword: ['', Validators.minLength(8)],
    profileName: ['', Validators.required],
    profileSurname: ['', Validators.required],
    profileMail: ['', Validators.required],
    profilePhone: [''],
    profileGender: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.profileForm.value['profileName'])
  }

}
