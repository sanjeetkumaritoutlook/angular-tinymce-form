import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    comboBox: new FormControl(''),
    rte: new FormControl(''),
  });
  handleComboBox(e: any) {
    console.log("combo-box",e.detail);
    
    this.profileForm.patchValue({
      comboBox: e.detail
    })
  }
  
  buttonClick(e:any) {
    console.log('custom event', e)
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
