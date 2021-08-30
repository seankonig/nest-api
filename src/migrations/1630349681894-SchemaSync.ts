import { MigrationInterface, QueryRunner } from 'typeorm'

export class SchemaSync1630349681894 implements MigrationInterface {
	name = 'SchemaSync1630349681894'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "public"."flavor" ADD "description" character varying`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "public"."flavor" DROP COLUMN "description"`
		)
	}
}
