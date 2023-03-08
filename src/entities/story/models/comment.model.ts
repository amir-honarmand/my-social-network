import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { User } from "../../user/models/user.model"
import { Story } from "./story.model"

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 300, nullable: false})
    caption: string
    
    @ManyToOne(()=> User)
    user_id: User | number
    
    @ManyToOne(()=> Story)
    story_id: Story | number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}