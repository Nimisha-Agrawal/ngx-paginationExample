import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  response!: Observable<any>;

  // constructor(private http:HttpClient) { }

  // backendRequest(requestTarget:string,requestType:string,requestData?:any,requestParams?:any):Observable<any>{
  //   let httpOptions = {
  //    headers: new HttpHeaders({'content-type': 'application/json'})
  //   }
  //   switch(requestType){
  //     case 'put':
  //     case 'post': 
  //     return this.http[requestType](requestTarget,requestData,httpOptions);
  //     case 'delete':
  //     case 'get': 
  //     return this.http[requestType](requestTarget,httpOptions);
  //   }
  //   //return of([]);
  // }
  
	constructor(private http: HttpClient) { }

	backendRequest(requestTarget: string, requestType: string, requestData?: undefined, requestParams?: undefined): Observable<any> {
		let httpOptions;
		httpOptions = {
			params: requestParams ? requestParams : undefined,
      headers : new HttpHeaders({
				'Content-type': 'application/json'
			})
		};

		switch (requestType) {
			case 'post':
			case 'put':
				this.response = this.http[requestType](requestTarget, requestData, httpOptions);
        break;
			case 'delete':
			case 'get':
				this.response = this.http[requestType](requestTarget, httpOptions);
        break;
		}
   return this.response;
	}
}
