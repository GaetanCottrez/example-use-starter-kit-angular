import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NetProvider } from '../interfaces/net-provider';

@Injectable({
  providedIn: 'root'
})
export class NetService implements NetProvider {
  constructor(private http: HttpClient) {}

  online$ = new BehaviorSubject<boolean>(true);

  get<T>(url: string): Observable<T[]> {
    return this.http.get<any>(url);
  }
}
