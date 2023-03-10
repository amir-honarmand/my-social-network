import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {nullable: false, length: 50})
    title: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({select: false})
    deletedAt: Date
}