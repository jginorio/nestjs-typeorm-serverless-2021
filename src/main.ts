import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
const express = require('express');

async function bootstrap() {
	/* Original Config */
	// const app = await NestFactory.create(AppModule);

	const expressApp = express();
	const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
	await app.listen(3000);
}
bootstrap();
