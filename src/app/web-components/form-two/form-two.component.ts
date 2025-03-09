import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  template: `
    <form [formGroup]="form" (ngSubmit)="submitForm()">
      <input formControlName="email" placeholder="Enter Email" />
      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>
  `,
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  form: FormGroup;

  @Input() set formData(value: any) {
    if (value) this.form.patchValue(value);
  }

  @Output() formSubmitted = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['']
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.form.valid) {
      console.log('reactive form'+JSON.stringify(this.form.value));
      this.formSubmitted.emit(this.form.value);
    }
  }
}
