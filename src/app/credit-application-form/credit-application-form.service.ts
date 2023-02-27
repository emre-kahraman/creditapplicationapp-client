import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CreditApplicationResult } from '../credit-application-result';

@Injectable({
  providedIn: 'root'
})
export class CreditApplicationFormService {
  constructor(private http: HttpClient) { }

  submitCreditApplicationForm(formData: any){
    return this.http.post<CreditApplicationResult>("http://localhost:8080/api/credits", formData);
  }

}