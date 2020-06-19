import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../entity/User";

export class MigrateUser1591025563761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let user = new User();
        user.username = "author";
        user.password = "author";
        user.nickname = "Deuce";
        user.firstname = "Khunpisit";
        user.lastname = "Siriyaphan";
        user.gender = "Male";
        user.birthday = "03/10/2529";
        user.hashPassword();
        user.role = "author";
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
