import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUser1591028971388 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, "nickname" varchar NOT NULL, "gender" varchar NOT NULL, "birthday" varchar NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`);
        await queryRunner.query(`INSERT INTO "temporary_user" ("id", "username", "password", "role", "createdAt", "updatedAt", "firstname", "lastname", "nickname", "gender", "birthday") SELECT "id", "username", "password", "role", "createdAt", "updatedAt", "firstname", "lastname", "nickname", "gender", "birthday" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        // await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "role" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "firstname" varchar NOT NULL, "lastname" varchar NOT NULL, "nickname" varchar NOT NULL, "gender" varchar NOT NULL, "birthday" varchar NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"))`);

        // await queryRunner.query(`INSERT INTO "user"("id", "username", "password", "role", "createdAt", "updatedAt") SELECT "id", "username", "password", "role", "createdAt", "updatedAt" FROM "temporary_user"`);
        await queryRunner.query(`INSERT INTO "user" ("id", "username", "password", "role", "createdAt", "updatedAt", "firstname", "lastname", "nickname", "gender", "birthday") SELECT "id", "username", "password", "role", "createdAt", "updatedAt", "firstname", "lastname", "nickname", "gender", "birthday" FROM "temporary_user"`);
  
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
