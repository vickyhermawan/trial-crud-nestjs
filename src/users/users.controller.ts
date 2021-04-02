import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    async showAllUsers() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.usersService.showAll(),
        };
    }

    @Post()
    async createUsers(@Body() data: UsersDTO) {
        console.log('data', data)
        return {
            statusCode: HttpStatus.OK,
            message: 'User added succesfully',
            data: await this.usersService.create(data),
        };
    }

    @Get(':id')
    async readUser(@Param('id') id: number) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.usersService.read(id)
        };
    }

    @Patch(':id')
    async updateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
        return {
            statusCode: HttpStatus.OK,
            message: 'User update successfully',
            data: await this.usersService.update(id, data)
        };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        await this.usersService.destory(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'User delete successfully'
        }
    }
}
