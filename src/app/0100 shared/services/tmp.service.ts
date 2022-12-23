import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Env variable
import { environment } from 'src/environments/environment';
//Shared types
import * as fromSharedTypes from '../../0100 shared/types/_index'


/*
 * SERVICE TEMPLATE
 * Use this template to create own service. Import your service to SharedModuel through _index.ts
*/

@Injectable({
  providedIn: 'root'
})
export class TmpService {

    baseUrl = environment.apiUrl + "/tmp/";
    config = { headers: new HttpHeaders().set('Content-Type', 'application/json') }

    constructor(private http: HttpClient) {}


    readAll(): Observable<fromSharedTypes.TmpInterface> {
        return this.http.get<fromSharedTypes.TmpInterface>(this.baseUrl, this.config);
    }

    read(id: number): Observable<fromSharedTypes.TmpInterface> {
        return this.http.get<fromSharedTypes.TmpInterface>(this.baseUrl + id, this.config);
    }

    create(tmp: fromSharedTypes.TmpInterface): Observable<string[]> {
        return this.http.post<string[]>(this.baseUrl, tmp, this.config);
    }

    delete(id: number): Observable<string> {
        return this.http.delete<string>(this.baseUrl + id, this.config);
    }

}
