import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Use Angular's Router to navigate programmatically:


@Component({
  selector: 'app-example',
  // templateUrl: './example.component.html',
  template: `<button (click)="goToAbout()">Go to Profile form</button>`,
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private router: Router) {}
  goToAbout() {
    this.router.navigate(['/profile-form']);
  }
  ngOnInit(): void {
  }

}
