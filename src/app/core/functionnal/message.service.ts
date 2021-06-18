import { Inject, Injectable } from '@angular/core';
import { Manager } from '../mediators/interfaces/manager';
import { Message } from './interfaces/message';
import { BehaviorSubject } from 'rxjs';
import {
  APP_NET_PROVIDER,
  APP_STORAGE_PROVIDER
} from '../mediators/app.tokens';
import { StorageProvider } from '../mediators/interfaces/storage-provider';
import { NetProvider } from '../mediators/interfaces/net-provider';

@Injectable()
export class MessageService implements Manager<Message> {
  constructor(
    @Inject(APP_NET_PROVIDER) private net: NetProvider,
    @Inject(APP_STORAGE_PROVIDER) private storage: StorageProvider
  ) {
    this.load();
  }

  data$ = new BehaviorSubject<Message[]>([]);

  create(target: Omit<Message, 'id'>): void {}

  load(): void {
    this.net
      .get<Message>('http://localhost:5050/messages')
      .subscribe(data => this.data$.next(data));
  }

  update(target: Message, info: Partial<Omit<Message, 'id'>>): void {}
}
