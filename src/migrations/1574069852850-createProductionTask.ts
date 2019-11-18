import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionTask1574069852850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD "operator_id" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD CONSTRAINT "FK_818907b6e76a5a27a65c95aa5e8" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP CONSTRAINT "FK_818907b6e76a5a27a65c95aa5e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP COLUMN "operator_id"`, undefined);
    }

}
