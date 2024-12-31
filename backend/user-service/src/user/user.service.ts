import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  // Find one user by ID
  async findOne(id: string): Promise<User> {
    if (!id || !Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid or empty ID');
    }

    const userId = new Types.ObjectId(id);
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Update a user's information
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  // Delete a user
  async remove(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id });
  }

  // Login operation
  async login(loginUserDto: LoginUserDto): Promise<{ token: string, message: string }> {
    const user = await this.userModel.findOne({ username: loginUserDto.username });
  
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    const isPasswordMatching = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isPasswordMatching) {
      throw new BadRequestException('Invalid credentials');
    }
  
    // Generate the JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },  // Payload with user ID and username
      'your-secret-key',  // Secret key for signing the token
      { expiresIn: '1h' }  // Token expiration time
    );
  
    // Return both token and a success message
    return { 
      token, 
      message: 'Login successful!'  // Success message
    };
  }
  
}
