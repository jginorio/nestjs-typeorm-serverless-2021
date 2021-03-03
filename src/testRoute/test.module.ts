import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZipEntity } from '../entities/zip.test.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ ZipEntity ]) ],
	controllers: [ TestController ],
	providers: [ TestService ]
})
export class TestModule {}
