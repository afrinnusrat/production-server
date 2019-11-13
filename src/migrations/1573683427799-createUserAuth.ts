import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserAuth1573683427799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users_auth" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" "users_auth_role_enum" NOT NULL DEFAULT 'WORKER_ROLE', "login" SERIAL NOT NULL, "password" character varying, "user_id" integer NOT NULL, CONSTRAINT "UQ_cb56638d87f34c88226a489d698" UNIQUE ("login"), CONSTRAINT "REL_8d4681a2d24fe0a272f0f6cce7" UNIQUE ("user_id"), CONSTRAINT "PK_32ddc1ae708e8261a870a6eb3e6" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`, undefined);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "street" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "state" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "zip" character varying NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "last_login" TIMESTAMP WITH TIME ZONE`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "last_logout" TIMESTAMP WITH TIME ZONE`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" date NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "users_auth" ADD CONSTRAINT "FK_8d4681a2d24fe0a272f0f6cce7f" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users_auth" DROP CONSTRAINT "FK_8d4681a2d24fe0a272f0f6cce7f"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a000cca60bcf04454e727699490"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "last_name" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "first_name" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_logout"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_login"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "zip"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "street"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "uuid"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying`, undefined);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('USER')`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" "users_role_enum" NOT NULL DEFAULT 'USER'`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`DROP TABLE "users_auth"`, undefined);
    }

}
