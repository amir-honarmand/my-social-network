import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { User } from "../../user/models/user.model"

@Entity()
export class Storyboard {
    @PrimaryGeneratedColumn()
    id: number

    // @Column('jsonb', {nullable: false})
    // : []

    // @CreateDateColumn()
    // createdAt: Date

    // @UpdateDateColumn()
    // updatedAt: Date

    // @DeleteDateColumn()
    // deletedAt: Date
}