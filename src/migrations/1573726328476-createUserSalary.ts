import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserSalary1573726328476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users_salary" ADD "updated_at" date NOT NULL DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users_salary" DROP COLUMN "updated_at"`, undefined);
    }

}
