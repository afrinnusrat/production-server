import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionTask1574071291440 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD "quantity" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD "duration" TIME NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD "customer_id" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" ADD CONSTRAINT "FK_2ee4c500c54cd6c1165b2a1347a" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP CONSTRAINT "FK_2ee4c500c54cd6c1165b2a1347a"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP COLUMN "customer_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP COLUMN "duration"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_tasks" DROP COLUMN "quantity"`, undefined);
    }

}
