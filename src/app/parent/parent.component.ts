import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  {

  constructor() { }

   isLoading = true; // initially true until child signals it's ready

  onFormReady() {
      console.log('Form ready received'); // 🟢 debug
    this.isLoading = false; // hide spinner once child notifies
    //to prevent flicker, add a short artificial delay before hiding the spinner:
    //  setTimeout(() => this.isLoading = false, 300); 

  }

}
