import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  lastName: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  alias: string;

  @Column({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @Column({ name: 'updated_at' })
  @Field(() => Date)
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
