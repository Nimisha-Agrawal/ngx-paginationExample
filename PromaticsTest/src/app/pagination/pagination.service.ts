import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private _backendSvc:BackendService) { }

  getInitialData(page:number,itemsPerPage:number):Observable<any>{
   return this._backendSvc.backendRequest(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${itemsPerPage}`,'get').pipe(map(response => response))
  }

  pageChange(page:number,itemsPerPage:number){
    return this._backendSvc.backendRequest(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${itemsPerPage}`,'get').pipe(map(response=>response))
  }
}
