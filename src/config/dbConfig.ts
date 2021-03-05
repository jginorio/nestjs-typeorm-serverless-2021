import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConnectionManager, getConnectionManager } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class Database implements TypeOrmOptionsFactory {
	async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
		const connectionManager: ConnectionManager = getConnectionManager();
		let options: any;

		if (connectionManager.has('default')) {
			options = connectionManager.get('default').options;
			await connectionManager.get('default').close();
		} else {
			options = ({
				type: 'mysql',
				host: process.env.DB_CONNECTION,
				port: process.env.DB_PORT,
				username: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_NAME,
				keepConnectionAlive: false,
				extra: {
					charset: 'utf8mb4_unicode_ci'
				},
				entities: [ UsersEntity],
				synchronize: false
			} as unknown) as TypeOrmModuleOptions;

			console.log(options);
		}
		return options;
	}
}
