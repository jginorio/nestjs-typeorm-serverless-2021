import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UsersEntity)
        private readonly  usersRepo: Repository<UsersEntity>
    ){}
    public async getUsers() {
		return await this.usersRepo.find();
	}

}
