import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, OneToOne } from "typeorm"
import { Storyboard } from "../../storyboard/models/storyboard.model"
import { User } from "../../user/models/user.model"
import { StoryStatus } from "../enums/story-status.enum"
import { StoryDetails } from "./story-details.model"

@Entity()
export class Story {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 800, nullable: true})
    caption: string
    
    @Column('varchar', {length: 500, nullable: true})
    content_url: string
    
    @Column('enum', {enum: StoryStatus, default: StoryStatus.PUBLISHED})
    status: StoryStatus

    @ManyToOne(()=> Storyboard, {nullable: false})
    @JoinColumn({name: 'storyboard_id'})
    storyboard_id: Storyboard | number

    @ManyToOne(()=> User, {nullable: false})
    @JoinColumn({name: 'user_id'})
    user_id: User | number

    @OneToOne(()=> StoryDetails, {nullable: false, onDelete: 'CASCADE'})
    @JoinColumn({name: 'story_details_id'})
    story_details_id: StoryDetails | number

    @Column('jsonb', {nullable: false})
    favorites_id: number[]

    @Column('jsonb')
    tags_id: number[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}