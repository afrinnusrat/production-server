import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionTask1574069639262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP CONSTRAINT "FK_818907b6e76a5a27a65c95aa5e8"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" RENAME COLUMN "operator_id" TO "master_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD CONSTRAINT "FK_82f234ebcf79b8d89dacffa771c" FOREIGN KEY ("master_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP CONSTRAINT "FK_82f234ebcf79b8d89dacffa771c"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" RENAME COLUMN "master_id" TO "operator_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD CONSTRAINT "FK_818907b6e76a5a27a65c95aa5e8" FOREIGN KEY ("operator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
