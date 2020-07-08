import { model, property } from '@loopback/repository';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { MinLength } from 'class-validator';
import { required, enumProperty } from '../../utils';

import { Visibility } from '../enums';
import { User } from '../user';

@model()
@Entity()
export class Project {

  @PrimaryGeneratedColumn()
  @property()
  id: number;

  @Column()
  @MinLength(2,
    { message: 'name is too short' })
  @required()
  name: string;

  @Column({ type: "text", nullable: true })
  @property()
  description?: string;

  @Column({ type: "enum", enum: Visibility, default: Visibility.PRIVATE })
  @enumProperty({ title: 'Visibility', values: Visibility, required: true })
  visibility: Visibility;

  @Column()
  userId!: number;

  @ManyToOne(() => User, user => user.projects)
  @property()
  user?: User;
}
