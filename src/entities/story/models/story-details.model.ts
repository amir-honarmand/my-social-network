import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Story } from "./story.model"

@Entity()
export class StoryDetails {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int4', {default: 0})
    view_count: number

    @Column('int4', {default: 0})
    like_count: number

    @Column('int4', {default: 0})
    comment_count: number
    
    @Column('int4', {default: 0})
    share_count: number

    @OneToOne(()=> Story, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'story_id'})
    story_id: Story | number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({select: false})
    deletedAt: Date
}