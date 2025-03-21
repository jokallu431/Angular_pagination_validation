import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableService } from './table.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { PaginationComponent } from "../pagination/pagination.component";
import { NgFor } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { filter } from 'rxjs';



interface Data {
  login: string,
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id": string,
  "url": string,
  "html_url": string,
  "followers_url": string,
  "following_url": string,
  "gists_url": string,
  "starred_url": string,
  "subscriptions_url": string,
  "organizations_url": string,
  "repos_url": string,
  "events_url": string,
  "received_events_url": string,
  "type": string,
  "user_view_type": string,
  "site_admin": boolean,
}

@Component({
  selector: 'app-table',
  imports: [RouterModule, FilterPipe, SortPipe, FormsModule, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  dataList: Data[] = [];
  title = 'ng-client';
  datalen!: number;
  errorMessage!: string;
  term!: "";
  currentPage = 1;
  itemsPerPage = 5;
  sortDirection = "asc"
  sortFilter = "id"
  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getAllData().subscribe({
      next: (dataList) => {
        this.dataList = dataList;
        this.datalen = dataList.length;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });

  }
  onClick(PageNo: any) {

     this.currentPage = PageNo;
     console.log("CP",this.currentPage);
     
    return this.currentPage;
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.dataList.slice(start, end);
  }

  onSort() {
      if (this.sortDirection === 'desc') {
        this.sortDirection = 'asc';
      } else {
        this.sortDirection = 'desc';
      }
  }
}
