import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  email: string;
}
