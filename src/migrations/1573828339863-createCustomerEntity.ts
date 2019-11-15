import {MigrationInterface, QueryRunner} from "typeorm";

export class createCustomerEntity1573828339863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "tax_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "customers" ADD "tax_id" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "tax_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "customers" ADD "tax_id" integer NOT NULL`, undefined);
    }

}
