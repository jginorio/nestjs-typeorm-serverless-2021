import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('zips')
export class ZipEntity {
	@PrimaryColumn() id: number;
}
