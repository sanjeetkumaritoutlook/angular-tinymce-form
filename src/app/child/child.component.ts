import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Child Component Content</p>
  `
,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    @Output() loadingChange = new EventEmitter<boolean>();

}
