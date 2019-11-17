import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionMachine1574018851031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "production_machines" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "last_used_at" TIMESTAMP WITH TIME ZONE, "last_used_by" integer, CONSTRAINT "PK_254580e89662da2f9dfbaee813a" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines" ADD CONSTRAINT "FK_aa6d47d590552a1762efc5431dd" FOREIGN KEY ("last_used_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines" DROP CONSTRAINT "FK_aa6d47d590552a1762efc5431dd"`, undefined);
        await queryRunner.query(`DROP TABLE "production_machines"`, undefined);
    }

}
