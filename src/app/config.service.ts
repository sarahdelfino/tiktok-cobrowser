import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { 
    options: {
      headers?: HttpHeaders | {[header: string]: string | string[]},
      observe?: 'response';
      params?: HttpParams|{[param: string]: string | string[]},
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  }
}
