import { InjectionToken } from '@angular/core';
import { Mediator } from './interfaces/mediator';
import { ApplicationState } from './interfaces/application-state';
import {StorageProvider} from "./interfaces/storage-provider";
import {NetProvider} from "./interfaces/net-provider";

export const APP_MEDIATOR = new InjectionToken<Mediator<ApplicationState>>(
  'MEDIATOR'
);

export const APP_NET_PROVIDER = new InjectionToken<Mediator<NetProvider>>(
  'NET_PROVIDER'
);

export const APP_STORAGE_PROVIDER = new InjectionToken<
  Mediator<StorageProvider>
>('STORAGE_PROVIDER');
