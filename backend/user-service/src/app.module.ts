import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserModule } from './user/user.module'; // User module to handle user-related functionality
import { AuthModule } from './auth/auth.module'; // Auth module for JWT logic

@Module({
  imports: [
    // MongoDB connection (updated for Mongoose 6.x)
    MongooseModule.forRoot(process.env.MONGO_URI),  // Make sure process.env.MONGO_URI is set in your .env file

    // Importing User and Auth modules
    UserModule,  // User module to handle user-related functionality
    AuthModule,  // Auth module for JWT authentication logic (it won’t conflict with MongoDB connection)
  ],
})
export class AppModule {
  constructor() {
    // Listen for MongoDB connection events
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected successfully!');
    });

    mongoose.connection.on('error', (error) => {
      console.log('MongoDB connection error:', error);
    });
  }
}
