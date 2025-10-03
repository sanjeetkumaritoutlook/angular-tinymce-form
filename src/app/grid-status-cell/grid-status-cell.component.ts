import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-status-cell',
  template: `
    <span [ngClass]="statusClass">{{ value }}</span>
  `,
  styles: [`
    .active { color: green; font-weight: bold; }
    .inactive { color: red; font-weight: bold; }
  `]

})
export class GridStatusCellComponent implements ICellRendererAngularComp {
  value: any;
  statusClass = '';

  agInit(params: any): void {
    this.value = params.value;
    this.statusClass = this.value === 'Active' ? 'active' : 'inactive';
  }

  refresh(): boolean {
    return false;
  }


}
