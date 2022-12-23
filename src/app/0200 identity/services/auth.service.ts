import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

//Idenity types
import * as fromIdenityTypes from '../../0200 identity/types/_index'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl =  environment.apiUrl + '/auth/';

  config = { headers: new HttpHeaders().set('Content-Type', 'application/json') }

  constructor(private http: HttpClient) { 
    this.initializeValue();
  }

  initializeValue(): void {}

  authRequest(payload: fromIdenityTypes.AuthorizationRequestInterface): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'login', payload, this.config);
}

}
