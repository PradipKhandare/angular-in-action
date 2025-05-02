import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';


  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
        street: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
      experience: new FormArray([
      ])
    });
  }

  onFormSubmitted() {
    console.log(this.reactiveForm);
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(
      null, Validators.required
    ))
  }

  deleteSkill(i: number) {
    const controls = (<FormArray>this.reactiveForm.get('skills'));
    controls.removeAt(i);
  }

  addExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }

  deleteExperience(index: number) {
    const formArray = (<FormArray>this.reactiveForm.get('experience'));
    formArray.removeAt(index);
  }

}
