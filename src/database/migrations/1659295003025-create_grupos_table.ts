import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";
const name = 'grupos'
const columns: TableColumnOptions[] = [
    {
        name: 'id',
        type: 'varchar',
        generationStrategy: 'uuid',
        isPrimary: true,
    },
    {
        name: 'nome',
        type: 'varchar',
        isNullable: true,
    },
    {
        name: 'tipo',
        type: 'varchar',
        isNullable: true,
    },
    {
        name: 'created_at',
        type: 'timestamp',
        isNullable: true,
    },
    {
        name: 'updated_at',
        type: 'timestamp',
        isNullable: true,
    },
    {
        name: 'deleted_at',
        type: 'timestamp',
        isNullable: true,
    }
]

export class createGruposTable1659295003025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name,
            columns
        }), true)


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(name)
    }

}
