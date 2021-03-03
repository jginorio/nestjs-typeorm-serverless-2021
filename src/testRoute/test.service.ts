import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ZipEntity } from '../entities/zip.test.entity';

@Injectable()
export class TestService {
	constructor(@InjectRepository(ZipEntity) private readonly zipsRepository: Repository<ZipEntity>) {}

	public async getTestZips() {
		return await this.zipsRepository.findOne({ where: { id: '00780' } });
	}
}
