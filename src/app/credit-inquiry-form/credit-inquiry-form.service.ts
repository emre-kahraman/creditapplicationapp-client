import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CreditApplicationResult } from '../credit-application-result';

@Injectable({
  providedIn: 'root'
})
export class CreditInquiryFormService {
  constructor(private http: HttpClient) { }

  getCreditApplicationResult(id: any, birthDate: any){
    return this.http.get<CreditApplicationResult>("http://localhost:8080/api/credits/"+id+"/"+birthDate);
  }
}