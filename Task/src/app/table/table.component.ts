import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableService } from './table.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from "../pagination/pagination.component";
import { SortPipe } from './sort.pipe';

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
  imports: [RouterModule,
    FilterPipe,
    SortPipe,
    FormsModule,
    PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  // faCoffee = faCoffee;
  dataList: Data[] = [];
  title = 'ng-client';
  datalen!: number;
  errorMessage!: string;
  term!: "";
  currentPage = 1;
  itemsPerPage = 10;
  sortDirection = "asc"
  sortFilters = ["id","login","node_id"]
  sortFilter = ''
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
  onClick(PageNo: number) {
    this.sortDirection='asc';
    return (this.currentPage = PageNo,this.sortDirection);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    let data = this.dataList.slice(start, end);
    return data;
  }

  onSort(key:string) {
    this.sortFilter=key;
    if(this.sortFilter.includes(key)){
      if (this.sortDirection === 'desc') {
        this.sortDirection = 'asc';
      } else {
        this.sortDirection = 'desc';
      }
    }
  }
}
