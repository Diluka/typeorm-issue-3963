import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Demo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        charset: "ascii",
        collation: "ascii_bin"
    })
    value: string;
}
