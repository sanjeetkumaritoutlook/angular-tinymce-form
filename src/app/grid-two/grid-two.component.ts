import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { GridStatusCellComponent } from '../grid-status-cell/grid-status-cell.component';
import { ICellRendererParams } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
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

  constructor(private http: HttpClient,private dialog: MatDialog) {
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
            <button class="btn-edit" data-action="edit">Edit</button>
            <button class="btn-delete" data-action="delete">Delete</button>
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

  
    // 👇 Handle View/Edit/Delete
   onGridReady(params: any) {
  this.gridApi = params.api;   // 👈 store the api reference

  // Optional: store columnApi if needed later
  // this.gridColumnApi = params.columnApi;

  params.api.addEventListener('cellClicked', (event: any) => {
    if (event.colDef.headerName === 'Actions') {
      if (event.event.target.classList.contains('btn-edit')) {
        this.onEdit(event.data);
      } else if (event.event.target.classList.contains('btn-delete')) {
        this.onDelete(event.data);
      }
    }
  });
}


   onView(row: any) {
    alert(`Viewing details for: ${row.name} (Role: ${row.role})`);
  }

    onEdit(row: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: { ...row } // pass a copy
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rowData = this.rowData.map(r => (r.id === row.id ? result : r));
      }
    });
  }

  
  onDelete(row: any) {
    if (confirm(`Are you sure you want to delete ${row.name}?`)) {
      this.rowData = this.rowData.filter(r => r.id !== row.id);
    }
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
