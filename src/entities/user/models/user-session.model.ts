import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./user.model"

@Entity()
export class UserSession {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> User)
    user: User | number
    
    @Column('varchar', {length: 200, nullable: true})
    ip: string

    @Column('varchar', {length: 500})
    accessToken: string

    @Column('varchar', {length: 500})
    refreshToken: string

    @Column('date')
    accessExpiresAt: Date

    @Column('date')
    refreshExpiresAt: Date
}