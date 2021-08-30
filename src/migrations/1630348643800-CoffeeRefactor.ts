import { MigrationInterface, QueryRunner } from 'typeorm'

export class CoffeeRefactor1630348643800 implements MigrationInterface {
	name = 'CoffeeRefactor1630348643800'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "public"."coffee" RENAME COLUMN "title" TO "name"`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "public"."coffee" RENAME COLUMN "name" TO "title"`
		)
	}
}
