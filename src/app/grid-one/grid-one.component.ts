import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-grid-one',
  templateUrl: './grid-one.component.html',
  styleUrls: ['./grid-one.component.scss']
})
export class GridOneComponent implements OnInit {

   columnDefs = [
    { field: 'id', sortable: true, filter: true, width: 80 },
    { field: 'name', sortable: true, filter: true },
    { field: 'username', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true },
    { field: 'phone', sortable: true, filter: true },
    { 
  field: 'website', 
  cellRenderer: (params: ICellRendererParams) => `<a href="http://${params.value}" target="_blank">${params.value}</a>` 
}

  ];

  rowData: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.rowData = data;
        this.loading = false;
      });
  }
}
