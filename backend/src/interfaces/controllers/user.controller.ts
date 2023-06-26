import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, UnauthorizedException } from "@nestjs/common";
import { UserService } from "@application/services/user.service";
import { User } from "@domain/entities/user.entity";
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "@auth/auth.service";
import { Request } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService,private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('login')
  async login(@Body() user: User) {
    const userInDb = await this.userService.findByUsername(user.username);
    const passwordMatch = await bcrypt.compare(user.password, userInDb.password);
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    return this.authService.login(userInDb);


  }

  @Post('register')
  async save(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }


  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User | undefined> {
    return this.userService.findById(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User | undefined> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
