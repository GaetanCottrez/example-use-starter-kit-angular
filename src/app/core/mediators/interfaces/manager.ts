import { BehaviorSubject } from 'rxjs';
import {Entity} from "../../functionnal/interfaces/entity";

export interface Manager<T extends Entity> {
  data$: BehaviorSubject<T[]>;
  load(): void;
  create(target: Omit<T, 'id'>): void;
  update(target: T, info: Partial<Omit<T, 'id'>>): void;
}
