import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

    isLoading = true;

  ngOnInit() {
    // Show loader for 400 ms on initial load
    setTimeout(() => {
      this.isLoading = false;
    }, 400);
  }

  // Optional: still keep child-to-parent communication
  onLoadingChange(flag: boolean) {
    if (flag) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 400);
    }
  }

}
