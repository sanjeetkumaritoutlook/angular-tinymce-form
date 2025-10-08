import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Output() formReady = new EventEmitter<void>();
  vendorForm!: FormGroup;
  formLoaded = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('Child init: loading form...');
    setTimeout(() => {
      this.vendorForm = this.fb.group({
        companyName: ['', [Validators.required, Validators.minLength(3)]],
        contactPerson: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        category: ['', Validators.required],
      });

      this.formLoaded = true;
      console.log('Emitting formReady');
      this.formReady.emit();
    }, 800);
  }

  onSubmit() {
    //if (this.vendorForm.valid) {
      console.log('Form submitted:', this.vendorForm.value);
      alert('Vendor Registered Successfully!');
    // } else {
    //   this.vendorForm.markAllAsTouched();
    // }
  }
}
