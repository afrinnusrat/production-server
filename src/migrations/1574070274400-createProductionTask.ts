import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionTask1574070274400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP COLUMN "last_used_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD "used_at" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD "task_id" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD CONSTRAINT "FK_530045f0dad1469197a1e79862e" FOREIGN KEY ("task_id") REFERENCES "production_tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP CONSTRAINT "FK_530045f0dad1469197a1e79862e"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP COLUMN "task_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP COLUMN "used_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD "last_used_at" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

}
