import { ConnectionOptions } from "typeorm";

export = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "demo",
    entities: ['./entity/*.entity.ts'],
    cli: {
        migrationsDir: "migration"
    }
} as ConnectionOptions;
