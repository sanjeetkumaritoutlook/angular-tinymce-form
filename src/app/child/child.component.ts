import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

 @Output() formReady = new EventEmitter<void>();

  formLoaded = false;

  ngOnInit() {
      console.log('Child init'); // 🟢 debug
    // Simulate async form setup (like API call, schema fetch, etc.)
    setTimeout(() => {
      this.formLoaded = true;
      console.log('Emitting formReady'); // 🟢 debug
      this.formReady.emit(); // notify parent that form is ready
    }, 800); // e.g., after 800ms
  }
}
