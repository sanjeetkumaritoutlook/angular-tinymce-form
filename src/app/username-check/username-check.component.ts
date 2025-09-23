import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.scss']
})
export class UsernameCheckComponent {
 form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: new FormControl(
        '',
        {
          validators: [Validators.required],
          asyncValidators: [this.usernameAvailable],
          updateOn: 'blur' // validate only when input loses focus
        }
      )
    });
  }

  // Async Validator function
  usernameAvailable(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    const taken = ['admin', 'rohit', 'test'];
    return of(taken.includes(ctrl.value?.toLowerCase()))
      .pipe(
        delay(400), // simulate API delay
        map(isTaken => (isTaken ? { usernameTaken: true } : null))
      );
  }

  get username() {
    return this.form.get('username')!;
  }

  onSubmit() {
    if (this.form.valid) {
      alert(`✅ Username "${this.username.value}" is available!`);
    }
  }
}
