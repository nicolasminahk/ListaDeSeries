import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ValidateIf, IsNotEmpty, IsDefined } from 'class-validator';

type Genero = "accion" | "animada" | "comedia" | "drama" | "suspenso" | "terror"



@Entity()
export class Serie {

    @PrimaryGeneratedColumn("uuid")
    public id: string

    @Column({ type: "boolean", nullable: false })
    public active?: boolean

    @Column({ type: "text", nullable: false })
    @IsDefined()
    public titulo!: string;

    @Column({ type: "text", nullable: false })
    public descripcion!: string;

    @Column({ type: 'int', nullable: false })
    public estrellas!: number;

    @Column({ type: "timestamptz", nullable: false })
    public fecha!: Date;

    @Column({ type: 'int', nullable: false })
    public precio!: number;

    @Column({ type: "text", nullable: false })
    public genero!: Genero;

    @Column({ type: 'boolean', nullable: false })
    public atp?: boolean
}

