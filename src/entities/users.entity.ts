import { Exclude,classToPlain } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UsersResponseInterface  } from '../users/interface/users.response.interface';

@Entity('users')
export class UsersEntity {

	@PrimaryGeneratedColumn() id: number;

	@Column() first_name: string;

	@Column() last_name: string;

	@Column() user_email: string;


	@Column() lawyer: boolean;

	@Column() rua: number;

	@Column()
	@Exclude()
	user_password: string;

	@BeforeInsert()
	async hashPassword() {
	  this.user_password = await bcrypt.hash(this.user_password, 10);
	}
  
	async comparePassword(input: string) {
	  return await bcrypt.compare(input, this.user_password);
	}
  
	toJSON(): UsersResponseInterface {
	  return <UsersResponseInterface>classToPlain(this);
	}
}
