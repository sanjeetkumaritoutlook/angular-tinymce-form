import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { GridStatusCellComponent } from '../grid-status-cell/grid-status-cell.component';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-grid-two',
  templateUrl: './grid-two.component.html',
  styleUrls: ['./grid-two.component.scss']
})
export class GridTwoComponent implements OnInit {
rowData: any[] = [];
  columnDefs: any[];
  gridApi!: GridApi;

  quickFilter: string = '';
  departmentFilter: string = '';

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { headerName: '', checkboxSelection: true, width: 40 },
      { field: 'id', sortable: true, filter: true, width: 80 },
      { field: 'name', sortable: true, filter: true, editable: true },
      { field: 'department', sortable: true, filter: true, editable: true },
      { field: 'salary', sortable: true, filter: true, editable: true },
      {
        headerName: 'Status',
        field: 'status',
        cellRendererFramework: GridStatusCellComponent
      },
      {
        headerName: 'Actions',
        cellRenderer: (params: ICellRendererParams)  => {
          return `
            <button class="btn-action" data-action="edit">Edit</button>
            <button class="btn-action" data-action="delete">Delete</button>
          `;
        },
        width: 160
      }
    ];
  }

  ngOnInit() {
    // Mock data (in real world, fetch from API)
    this.rowData = [
      { id: 1, name: 'Alice', department: 'HR', salary: 45000, status: 'Active' },
      { id: 2, name: 'Bob', department: 'IT', salary: 60000, status: 'Inactive' },
      { id: 3, name: 'Charlie', department: 'Finance', salary: 75000, status: 'Active' },
      { id: 4, name: 'Diana', department: 'IT', salary: 55000, status: 'Active' },
      { id: 5, name: 'Eve', department: 'Finance', salary: 80000, status: 'Inactive' }
    ];
  }

  
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  applyFilters() {
    this.gridApi.setQuickFilter(this.quickFilter);

    if (this.departmentFilter) {
      this.gridApi.setFilterModel({
        department: { type: 'equals', filter: this.departmentFilter }
      });
      this.gridApi.onFilterChanged();
    } else {
      this.gridApi.setFilterModel(null);
    }
  }

  clearFilters() {
    this.quickFilter = '';
    this.departmentFilter = '';
    this.gridApi.setQuickFilter('');
    this.gridApi.setFilterModel(null);
    this.gridApi.onFilterChanged();
  }

  exportSelected() {
    this.gridApi.exportDataAsCsv({
      onlySelected: true,
      fileName: 'selected_employees.csv'
    });
  }

  deleteSelected() {
    const selected = this.gridApi.getSelectedRows();
    this.rowData = this.rowData.filter(r => !selected.includes(r));
    this.gridApi.setRowData(this.rowData);
  }
}
