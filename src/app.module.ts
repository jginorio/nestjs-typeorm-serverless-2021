import { TestModule } from './testRoute/test.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from './config/dbConfig';
@Module({
	imports: [
		TestModule,
		TypeOrmModule.forRootAsync({
			useClass: Database
		})
	],
	controllers: [],
	providers: []
})
export class AppModule {}
