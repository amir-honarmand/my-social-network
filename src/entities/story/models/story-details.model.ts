import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Storyboard } from "../../storyboard/models/storyboard.model"
import { User } from "../../user/models/user.model"

@Entity()
export class StoryDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 200, default: '0'})
    view_number: string
    
    @Column('varchar', {length: 200, default: '0'})
    share_number: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}