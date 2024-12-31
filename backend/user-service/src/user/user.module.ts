// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),  // Register the User schema
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Make UserService available for other modules if needed
})
export class UserModule {}

