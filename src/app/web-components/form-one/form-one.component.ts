import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-one',
  template: `<form (ngSubmit)="submitForm()">
               <input [(ngModel)]="formData.name" name="first" placeholder="Enter Name" />
               <button type="submit">Submit</button>
             </form>`,
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {
  @Input() formData: any = {};
  @Output() formSubmitted = new EventEmitter<any>();

  submitForm() {
    console.log('template driven form'+JSON.stringify(this.formData));
    this.formSubmitted.emit(this.formData);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
