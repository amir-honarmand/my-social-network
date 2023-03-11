import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm"
import { Story } from "../../story/models/story.model"

@Entity()
export class Storyboard {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int4', {nullable: true})
    day: number

    // @OneToMany(()=> Story, (story)=> story.storyboard_id)
    // stories: Story[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn({select: false})
    deletedAt: Date
}