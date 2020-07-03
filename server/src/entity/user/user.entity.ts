import { model, property } from '@loopback/repository';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Unique,
  OneToMany
} from "typeorm";
import { MinLength } from 'class-validator';

import { UserRole } from '../../components/jwt';
import { required, enumProperty } from '../../utils';

import { UserCredentials } from './user-credentials.entity';
import { UserProfile } from './user-profile.entity';
import { Token } from './token.entity';

@model()
@Entity()
@Unique(["username"])
export class User {

  @PrimaryGeneratedColumn()
  @property()
  id: number;

  @Column()
  @required()
  @MinLength(2,
    { message: 'username is too short' })
  username: string;

  @Column({ type: "enum", enum: UserRole, default: UserRole.MEMBER })
  @enumProperty({ title: 'UserRole', values: UserRole, required: true })
  role: UserRole

  @OneToOne(() => UserCredentials, { cascade: ['insert'] })
  @JoinColumn()
  credentials: UserCredentials;

  @OneToOne(() => UserProfile, { cascade: true })
  @JoinColumn()
  @property()
  profile: UserProfile;

  @OneToMany(() => Token, token => token.user)
  tokens: Token[];
}
