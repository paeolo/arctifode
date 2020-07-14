import {
  inject,
  bind,
  BindingScope,
  intercept,
} from '@loopback/core';
import {
  post,
  api,
  requestBody,
  RestBindings,
  Request,
  Response,
} from '@loopback/rest';

import {
  logger,
  LOGGER_LEVEL,
  UploaderBindings,
} from '../components';
import { ReturnsWithCode } from '../utils';

@bind({ scope: BindingScope.SINGLETON })
@api({ basePath: '/artifact', paths: [] })
export class ArtifactController {

  /**
  ** Upload and save an artifact
  **/
  @post(
    '/upload',
    ReturnsWithCode(204, 'Artifact is uploaded')
  )
  @intercept(UploaderBindings.INTERCEPTOR)
  @logger(LOGGER_LEVEL.INFO)
  async upload(
    @requestBody.file() request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ) {
  }
}
