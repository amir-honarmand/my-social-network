import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { FavoriteStatus } from "../enums/favorite-status.enum"

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {nullable: false, length: 30})
    title: string

    @Column('enum', {enum: FavoriteStatus, default: FavoriteStatus.ACTIVE})
    status: FavoriteStatus

    @Column('int4', {default: 0})
    used_count: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({select: false})
    deletedAt: Date
}