import { authenticate } from '@loopback/authentication';
import {
  inject,
  bind,
  BindingScope,
} from '@loopback/core';
import {
  SecurityBindings,
  UserProfile
} from '@loopback/security';
import { model, property } from '@loopback/repository';
import {
  api,
  put,
  requestBody,
  get,
} from '@loopback/rest';

import {
  logger,
  LOGGER_LEVEL,
  typeorm,
} from '../components';
import { Project, Visibility } from '../entity';
import { Returns, required, enumProperty, ReturnsArray } from '../utils';
import { Repository } from 'typeorm';

@model()
export class NewProject {
  @required({ jsonSchema: { examples: ['My project'] } })
  name: string;
  @property({ jsonSchema: { examples: ['My description'] } })
  description?: string;
  @enumProperty({ title: 'Visibility', values: Visibility, required: true })
  visibility: Visibility;
}

@bind({ scope: BindingScope.SINGLETON })
@api({ basePath: '/project', paths: [] })
export class ProjectController {

  constructor(
    @typeorm.repository(Project) private projects: Repository<Project>,
  ) { }

  /**
  ** Create a new project
  **/
  @put(
    '/create',
    Returns(Project, 'The created project').withSecurity()
  )
  @authenticate('basic')
  @logger(LOGGER_LEVEL.INFO)
  async create(
    @requestBody() newProject: NewProject,
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile
  ) {
    const project = this.projects.create({
      name: newProject.name,
      description: newProject.description,
      visibility: newProject.visibility,
      userId: currentUserProfile.id
    });
    return await this.projects.save(project);
  }

  /**
  ** Obtain an array of projects for user
  **/
  @get(
    '/obtain',
    ReturnsArray(Project, 'An array of projects').withSecurity()
  )
  @authenticate('basic')
  @logger(LOGGER_LEVEL.DEBUG)
  async obtain(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile
  ) {
    return await this.projects.find();
  }

  /**
  ** Obtain an array of public projects
  **/
  @get(
    '/obtainPublic',
    ReturnsArray(Project, 'An array of public projects')
  )
  @logger(LOGGER_LEVEL.DEBUG)
  async obtainPublic() {
    return await this.projects.find({
      where: {
        visibility: Visibility.PUBLIC
      }
    });
  }
}
