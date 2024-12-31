/*import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Import UserService
import { LoginDto } from './dto/login.dto'; // Import LoginDto
import { JwtPayload } from './jwt-payload.interface';  // Correct path
 // Import JwtPayload interface
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, // Inject UserService
    private jwtService: JwtService, // Inject JwtService
  ) {}

  // Method to validate user credentials
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);

    if (!user) {
      return null; // User not found, return null
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null; // Invalid password, return null
    }

    // If credentials are valid, return the user info
    return { username: user.username, email: user.email };
  }

  // Login method
  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Validate the user's credentials using the validateUser method
    const user = await this.validateUser(username, password);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // If credentials are valid, generate the JWT token
    const payload: JwtPayload = { email: user.email, username: user.username };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}*/

