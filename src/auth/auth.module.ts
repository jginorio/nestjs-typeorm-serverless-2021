import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';


import { UsersModule } from '../users/users.module';
@Module({
  imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
          secret: 'asdasdaswdasdas',
          signOptions: { expiresIn: '2 days' }
      })
  ],
  exports: [AuthService],
  providers: [
      AuthService,
      LocalStrategy,
      JwtStrategy
  ],
})
export class AuthModule {}