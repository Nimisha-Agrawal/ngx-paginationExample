import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  passengersList:any;
  page: number = 1;
  itemsPerPage = 10;
  totalPassengers : any; 
  constructor(private pagination:PaginationService) {}

  ngOnInit(): void {
    this.getInitialTableData();
    
  }

  getInitialTableData(){
    return this.pagination.getInitialData(this.page,this.itemsPerPage).subscribe(res => {
      console.log(res);
      this.passengersList = res.data;
      this.totalPassengers = res.totalPassengers;
      this.page = 0
    })
  }

  pageChange(page: any){
    return this.pagination.pageChange(this.page,this.itemsPerPage).subscribe((data: any) => {
      this.passengersList =  data.data;
      this.totalPassengers= data.totalPassengers;
    })
  }


}
