import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    
    handleRequest(err, user, info: Error) {
        if(info instanceof TokenExpiredError) {
            throw new UnauthorizedException(info.message);
        } else if (err || !user) {
            throw err || new UnauthorizedException();
        }
        return user;
    }
}
