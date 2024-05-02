import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(15)
  @IsOptional()
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  lastName: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(10)
  @IsOptional()
  alias: string;
}
