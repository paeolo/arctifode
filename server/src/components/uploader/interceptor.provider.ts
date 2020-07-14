import {
  Provider,
  inject,
  GenericInterceptor,
  InvocationContext,
} from '@loopback/core';
import { toInterceptor } from '@loopback/rest';
import multer from 'multer';

import { UploaderBindings } from './keys';
import { UploaderService } from './uploader.service';

export class UploadInterceptorProvider implements Provider<GenericInterceptor<InvocationContext>> {

  private readonly config: multer.Options;

  constructor(
    @inject(UploaderBindings.SERVICE) private service: UploaderService,
    @inject(UploaderBindings.STORAGE_DIRECTORY) storageDirectory: string
  ) {
    this.config = {
      storage: multer.diskStorage({ destination: storageDirectory }),
      limits: {
        files: 1
      }
    }
  }

  /**
  * @returns An interceptor function
  */
  value() {
    const handler = multer(this.config).any();
    return toInterceptor(handler);
  }
}
