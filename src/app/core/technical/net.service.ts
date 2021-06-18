import { Injectable } from '@angular/core';
import { NetProvider } from '../mediators/interfaces/net-provider';
import { BehaviorSubject, Observable } from 'rxjs';
import { Entity } from '../functionnal/interfaces/entity';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NetService implements NetProvider {
  constructor(private http: HttpClient) {}

  online$ = new BehaviorSubject<boolean>(true);

  get<T extends Entity>(url: string): Observable<T[]> {
    return this.http.get<any>(url);
  }
}
