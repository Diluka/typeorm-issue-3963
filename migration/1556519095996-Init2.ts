import {MigrationInterface, QueryRunner} from "typeorm";

export class Init21556519095996 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `demo` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) CHARACTER SET \"ascii\" COLLATE \"ascii_bin\" NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `demo`");
    }

}
