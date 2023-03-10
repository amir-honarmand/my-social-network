import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn } from "typeorm"
import { User } from "../../user/models/user.model"
import { Story } from "./story.model"

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 300, nullable: false})
    caption: string
    
    @ManyToOne(()=> User)
    @JoinColumn({name: 'user_id'})
    user_id: User | number
    
    @ManyToOne(()=> Story)
    @JoinColumn({name: 'story_id'})
    story_id: Story | number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({select: false})
    deletedAt: Date
}