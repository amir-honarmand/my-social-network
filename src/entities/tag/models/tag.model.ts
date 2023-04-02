import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { TagStatus } from "../enums/tag-status.enum"

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {nullable: false, length: 30})
    title: string

    @Column('enum', {enum: TagStatus, default: TagStatus.ACTIVE})
    status: TagStatus

    @Column('int4', {default: 0})
    used_count: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({select: false})
    deletedAt: Date
}