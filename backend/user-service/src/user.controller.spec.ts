import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.schema';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
    userService = app.get<UserService>(UserService);
  });

  describe('create', () => {
    it('should create a user', async () => {
      const user: User = { name: 'John Doe', email: 'john.doe@example.com', password: 'password123' };
      const createdUser = { ...user, _id: 'some-id' }; // Mock the return value
      jest.spyOn(userService, 'createUser').mockResolvedValue(createdUser);

      const result = await userController.create(user);
      expect(result).toEqual(createdUser); // Check if the result matches the created user
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const users: User[] = [{ name: 'John Doe', email: 'john.doe@example.com', password: 'password123' }];
      jest.spyOn(userService, 'getAllUsers').mockResolvedValue(users);

      const result = await userController.findAll();
      expect(result).toEqual(users); // Check if the result matches the list of users
    });
  });
});
