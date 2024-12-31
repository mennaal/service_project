import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module'; // Import UserModule to access user-related logic
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

@Module({
  imports: [
    ConfigModule.forRoot(),  // Initialize ConfigModule to read from .env
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Ensure JWT_SECRET is defined in your .env file
      signOptions: { expiresIn: '60s' }, // JWT expiration time
    }),
    UserModule, // Import UserModule to access user-related logic like the user schema
  ],
  providers: [JwtStrategy], // Provide JwtStrategy
  exports: [JwtStrategy], // Export JwtStrategy if needed
})
export class AuthModule {}
