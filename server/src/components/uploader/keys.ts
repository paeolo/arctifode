import {
  BindingKey,
  GenericInterceptor,
  InvocationContext
} from '@loopback/core';

import { UploaderComponent } from './uploader.component';
import { UploaderService } from './uploader.service';

export namespace UploaderBindings {
  export const INTERCEPTOR = BindingKey.create<GenericInterceptor<InvocationContext>>('uploader.interceptor');
  export const SERVICE = BindingKey.create<UploaderService>('uploader.service');
  export const STORAGE_DIRECTORY = BindingKey.create<string>('uploader.storage-directory');
  export const COMPONENT = BindingKey.create<UploaderComponent>('components.UploaderComponent');
}
