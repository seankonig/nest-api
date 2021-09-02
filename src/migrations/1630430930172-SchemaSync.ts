import { MigrationInterface, QueryRunner } from 'typeorm'

export class SchemaSync1630430930172 implements MigrationInterface {
	name = 'SchemaSync1630430930172'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "public"."coffee" RENAME COLUMN "name" TO "title"`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "public"."coffee" RENAME COLUMN "title" TO "name"`
		)
	}
}
