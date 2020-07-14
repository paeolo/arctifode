import {
  Binding,
  Component,
  ContextTags,
  bind,
  config,
  BindingScope,
} from '@loopback/core';

import { UploaderBindings } from './keys';
import { UploadInterceptorProvider } from './interceptor.provider';
import { UploaderService } from './uploader.service';

export type UploaderConfig = {
  storageDirectory: string;
}

@bind({
  tags: { [ContextTags.KEY]: UploaderBindings.COMPONENT },
  scope: BindingScope.SINGLETON,
})
export class UploaderComponent implements Component {
  bindings: Binding<unknown>[];

  constructor(
    @config() readonly config: UploaderConfig
  ) {
    this.bindings = [
      Binding.bind(UploaderBindings.STORAGE_DIRECTORY).to(config.storageDirectory),
      Binding.bind(UploaderBindings.SERVICE).toClass(UploaderService)
        .inScope(BindingScope.SINGLETON),
      Binding.bind(UploaderBindings.INTERCEPTOR).toProvider(UploadInterceptorProvider)
        .inScope(BindingScope.SINGLETON)
    ];
  }
}
