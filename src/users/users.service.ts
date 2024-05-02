import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphQLError } from 'graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const { name, email } = createUserInput;
      const payload = {
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const user = this.userRepository.create(payload);

      return await this.userRepository.save(user);
    } catch (error) {
      throw new GraphQLError('Email already exists', {
        extensions: {
          code: error.code,
        },
      });
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new GraphQLError(`User with id: ${userId} not found`, {
        extensions: {
          code: 'CAN_NOT_FIND_BY_ID',
        },
      });
    }

    return user;
  }

  async update(userId: string, updateUserInput: UpdateUserInput): Promise<any> {
    const payload = {
      ...updateUserInput,
      updatedAt: new Date(),
    };

    await this.userRepository.update({ id: userId }, payload);
    return await this.findOne(userId);
  }

  async remove(userId: string): Promise<string> {
    await this.findOne(userId);
    await this.userRepository.softDelete(userId);
    return `User with id: ${userId} deleted`;
  }
}
