import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'getUsers' })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUser' })
  findOne(
    @Args('userId', { type: () => String }) userId: string,
  ): Promise<User> {
    return this.usersService.findOne(userId);
  }

  @Mutation(() => User)
  updateUser(
    @Args('userId', { type: () => String }) userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<any> {
    return this.usersService.update(userId, updateUserInput);
  }

  @Mutation(() => String)
  removeUser(
    @Args('UserId', { type: () => String }) userId: string,
  ): Promise<string> {
    return this.usersService.remove(userId);
  }
}
