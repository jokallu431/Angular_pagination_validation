import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [NgFor,NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
  
  @Input() totalItems  ! : number;
  @Input() currentPage ! : number;
  @Input() itemsPerPage! : number;
  @Output() clicked = new EventEmitter<number>();

  totalPages = 1;
  pages: number []=[];

  constructor(){}

  ngOnInit():void{
    if(this.totalItems) {
      this.totalPages= Math.ceil(this.totalItems/this.itemsPerPage);
      this.pages = Array.from({length: this.totalPages},(_,i)=>i+1);
    }
  }

  pageClicked(page:number){
    this.clicked.emit(page);
  }
}
