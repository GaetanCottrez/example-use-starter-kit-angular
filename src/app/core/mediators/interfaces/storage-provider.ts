import { Entity } from '../../functionnal/interfaces/entity';
import { Observable } from 'rxjs';

export interface StorageProvider {
  save<T extends Entity>(key: string, collection: T[]): Observable<boolean>;
  load<T extends Entity>(key: string): Observable<T[]>;
}
