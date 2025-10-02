import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid-community';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { GridRowActionsComponent } from '../grid-row-actions/grid-row-actions.component';
@Component({
  selector: 'app-grid-one',
  templateUrl: './grid-one.component.html',
  styleUrls: ['./grid-one.component.scss']
})
export class GridOneComponent implements OnInit {

   columnDefs = [
    { headerName: '', checkboxSelection: true, width: 40 },
    { field: 'id', sortable: true, filter: true, width: 80 },
    { field: 'name', sortable: true, filter: true },
    { field: 'username', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true },
    { field: 'phone', sortable: true, filter: true },
    { 
  field: 'website', 
  sortable: true, 
  filter: true,
  cellRenderer: (params: ICellRendererParams) => `<a href="http://${params.value}" target="_blank">${params.value}</a>` 
},
  {
      headerName: 'Actions',
      cellRendererFramework: GridRowActionsComponent,
      width: 150
    }

  ];

  rowData: any[] = [];
  loading = true;
  private gridApi!: GridApi;
  private gridColumnApi!: ColumnApi;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.rowData = data;
        this.loading = false;
      });
  }

    // AG Grid Ready event
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  // Quick filter for outside search box
  onQuickFilter(event: any) {
    this.gridApi.setQuickFilter(event.target.value);
  }

  // Export selected rows to CSV
  exportSelected() {
    const selectedData = this.gridApi.getSelectedRows();
    this.gridApi.exportDataAsCsv({ onlySelected: true });
  }

  // Export all rows to CSV
  exportAll() {
    this.gridApi.exportDataAsCsv();
  }
    // Optional: handle row actions from the child component
  onRowAction(event: { type: string; data: any }) {
    if (event.type === 'view') {
      alert('View: ' + event.data.name);
    } else if (event.type === 'edit') {
      alert('Edit: ' + event.data.name);
    }
  }

}
