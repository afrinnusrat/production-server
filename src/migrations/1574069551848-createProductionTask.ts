import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionTask1574069551848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP CONSTRAINT "FK_6a961778180808bac827aee0e19"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" RENAME COLUMN "user_id" TO "operator_id"`, undefined);
        await queryRunner.query(`CREATE TABLE "production_tasks" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "operator_id" integer, CONSTRAINT "PK_2e650b46a4eb798dbb97b61973e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD CONSTRAINT "FK_818907b6e76a5a27a65c95aa5e8" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD CONSTRAINT "FK_96c583a6a9cac8cb6e2f8e3bc95" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP CONSTRAINT "FK_96c583a6a9cac8cb6e2f8e3bc95"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP CONSTRAINT "FK_818907b6e76a5a27a65c95aa5e8"`, undefined);
        await queryRunner.query(`DROP TABLE "production_tasks"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" RENAME COLUMN "operator_id" TO "user_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD CONSTRAINT "FK_6a961778180808bac827aee0e19" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
