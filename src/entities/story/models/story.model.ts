import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Storyboard } from "../../storyboard/models/storyboard.model"
import { User } from "../../user/models/user.model"
import { StoryDetails } from "./story-details.model"

@Entity()
export class Story {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 800, nullable: true})
    caption: string
    
    @Column('varchar', {length: 500, nullable: true})
    content_url: string
    
    @Column('enum', {enum: [], default: ''})
    status: []

    @ManyToOne(()=> Storyboard)
    storyboard_id: Storyboard | number

    @ManyToOne(()=> User)
    user_id: User | number

    @ManyToOne(()=> StoryDetails)
    story_details_id: StoryDetails | number

    @Column('jsonb', {nullable: false})
    favorites_id: []

    @Column('jsonb', {nullable: false})
    tags_id: []

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}