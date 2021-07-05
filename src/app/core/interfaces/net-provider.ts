import { BehaviorSubject, Observable } from 'rxjs';
import {InjectionToken} from "@angular/core";

export interface NetProvider {
  online$: BehaviorSubject<boolean>;
  get<T>(url: string): Observable<T[]>;
}

export const APP_NET_PROVIDER = new InjectionToken<NetProvider>(
  'NET_PROVIDER'
);
