import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-row-actions',
    template: `
    <button (click)="viewRow()">View</button>
    <button (click)="editRow()">Edit</button>
  `,

   styles: [`button { margin-right: 5px; }`]
})
export class GridRowActionsComponent  implements ICellRendererAngularComp {
  @Input() data: any;
  @Output() action = new EventEmitter<{ type: string; data: any }>();

  private params: any;

  // AG Grid passes row data here
  agInit(params: any): void {
    this.params = params;
    this.data = params.data;
  }

  refresh(params: any): boolean {
    return false;
  }

  viewRow() {
    alert('View: ' + this.data.name);
  }

  editRow() {
    alert('Edit: ' + this.data.name);
  }

}
