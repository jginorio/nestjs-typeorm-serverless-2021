import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('testRoute')
export class TestController {
	constructor(private readonly testService: TestService) {}

	@Get()
	getZips() {
		return this.testService.getTestZips();
	}
}
