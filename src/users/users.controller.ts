
import { Body, Controller, Get, Param, Post, UseGuards, Request, Req, Query, ParseIntPipe, NotAcceptableException, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/guards/local.auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
        ) {}

	
    @Post('signup')
    public async signUp(@Body() payload: any) {
        return this.authService.signup(payload).then(token => token).catch(err => err);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public async login(@Request() req) {
        console.log(req.user);
        return this.authService.login(req.user);
    }
}
