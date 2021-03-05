import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from './config/dbConfig';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRootAsync({
			useClass: Database
		}),
		AuthModule,
		UsersModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
