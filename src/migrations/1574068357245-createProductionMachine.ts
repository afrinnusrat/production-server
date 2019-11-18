import {MigrationInterface, QueryRunner} from "typeorm";

export class createProductionMachine1574068357245 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines" DROP CONSTRAINT "FK_aa6d47d590552a1762efc5431dd"`, undefined);
        await queryRunner.query(`CREATE TABLE "production_machines_history" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "last_used_at" TIMESTAMP NOT NULL DEFAULT now(), "machine_id" integer, "user_id" integer, CONSTRAINT "PK_91a63687cbea617333757ee3ada" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines" DROP COLUMN "last_used_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines" DROP COLUMN "last_used_by"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD CONSTRAINT "FK_2fdccdf1e25cd0216de651e0db3" FOREIGN KEY ("machine_id") REFERENCES "production_machines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" ADD CONSTRAINT "FK_6a961778180808bac827aee0e19" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP CONSTRAINT "FK_6a961778180808bac827aee0e19"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines_history" DROP CONSTRAINT "FK_2fdccdf1e25cd0216de651e0db3"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines" ADD "last_used_by" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines" ADD "last_used_at" TIMESTAMP WITH TIME ZONE`, undefined);
        await queryRunner.query(`DROP TABLE "production_machines_history"`, undefined);
        await queryRunner.query(`ALTER TABLE "production_machines" ADD CONSTRAINT "FK_aa6d47d590552a1762efc5431dd" FOREIGN KEY ("last_used_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
