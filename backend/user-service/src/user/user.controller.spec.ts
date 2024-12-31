import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  // Mock the UserService
  const mockUserService = {
    create: jest.fn().mockResolvedValue({ email: 'test@test.com', name: 'Test User' }),
    findAll: jest.fn().mockResolvedValue([{ email: 'test@test.com', name: 'Test User' }]),
    findOne: jest.fn().mockResolvedValue({ email: 'test@test.com', name: 'Test User' }),
    update: jest.fn().mockResolvedValue({ email: 'test@test.com', name: 'Updated User' }),
    remove: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = { email: 'test@test.com', password: 'password', username: 'Test User' };
    expect(await userController.create(createUserDto)).toEqual({ email: 'test@test.com', name: 'Test User' });
  });

  it('should return all users', async () => {
    expect(await userController.findAll()).toEqual([{ email: 'test@test.com', name: 'Test User' }]);
  });

  it('should return one user by id', async () => {
    expect(await userController.findOne('1')).toEqual({ email: 'test@test.com', name: 'Test User' });
  });

  it('should update a user', async () => {
    const updateUserDto: UpdateUserDto = { name: 'Updated User' };
    expect(await userController.update('1', updateUserDto)).toEqual({
      email: 'test@test.com',
      name: 'Updated User',
    });
  });

  it('should remove a user', async () => {
    await userController.remove('1');
    expect(mockUserService.remove).toHaveBeenCalledWith('1');
  });
});
