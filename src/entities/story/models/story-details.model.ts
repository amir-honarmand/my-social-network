import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Story } from "./story.model"

@Entity()
export class StoryDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 200, default: '0'})
    view_number: string
    
    @Column('varchar', {length: 200, default: '0'})
    share_number: string

    @OneToOne(()=> Story, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'story_id'})
    story_id: Story | number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}