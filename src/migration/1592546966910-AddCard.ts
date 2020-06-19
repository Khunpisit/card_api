import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCard1592546966910 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "card" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "status" varchar NOT NULL, "content" varchar NOT NULL, "category" varchar NOT NULL, "author" varchar NOT NULL, CONSTRAINT "UQ_d311dc7af4f9587fe6076d11c54" UNIQUE ("name"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
