import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";

import { TokenType } from '../../components/jwt';
import { User } from './user.entity';

@Entity()
export class Token {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TokenType,
    default: TokenType.AUTH_REFRESH
  })
  type: TokenType;

  @Column({ type: 'timestamptz' })
  expiresIn: Date;

  @Column({ nullable: true })
  userId?: number;

  @ManyToOne(() => User, user => user.tokens)
  user: User;
}
