import { BehaviorSubject, Observable } from 'rxjs';
import { Entity } from '../../functionnal/interfaces/entity';

export interface NetProvider {
  online$: BehaviorSubject<boolean>;
  get<T extends Entity>(url: string): Observable<T[]>;
}
