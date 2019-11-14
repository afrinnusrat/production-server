import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserSalary1573726118139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users_salary" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "salary" numeric(13,2) NOT NULL DEFAULT 0, "contract_type" "users_salary_contract_type_enum" NOT NULL DEFAULT 'Full-time', "user_id" integer NOT NULL, CONSTRAINT "REL_44e3806141ebfce0a6137cabfe" UNIQUE ("user_id"), CONSTRAINT "PK_8142e2da245f6810a3733d9c2be" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "users_salary" ADD CONSTRAINT "FK_44e3806141ebfce0a6137cabfe2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users_salary" DROP CONSTRAINT "FK_44e3806141ebfce0a6137cabfe2"`, undefined);
        await queryRunner.query(`DROP TABLE "users_salary"`, undefined);
    }

}
