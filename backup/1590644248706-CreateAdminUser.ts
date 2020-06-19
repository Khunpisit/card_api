import { MigrationInterface, QueryRunner, getRepository } from "typeorm";

export class CreateAdminUser1547919837483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // let user = new User();
    // user.username = "admin1";
    // user.password = "admin1";
    // user.nickname = "Deuce";
    // user.firstname = "Khunpisit";
    // user.lastname = "Siriyaphan";
    // user.gender = "Male";
    // user.birthday = "03/10/2529";
    // user.hashPassword();
    // user.role = "ADMIN";
    // const userRepository = getRepository(User);
    // await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}