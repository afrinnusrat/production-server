import {MigrationInterface, QueryRunner} from "typeorm";

export class createCustomerEntity1573828449290 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customers" RENAME COLUMN "tax_id" TO "tax"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "customers" RENAME COLUMN "tax" TO "tax_id"`, undefined);
    }

}
