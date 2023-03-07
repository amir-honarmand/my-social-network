import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { userStatus } from "../enums/user-status.enum"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 30, nullable: false})
    first_name: string

    @Column('varchar', {length: 30, nullable: false})
    last_name: string

    @Column('varchar', {length: 30, nullable: false})
    user_name: string

    @Column('varchar', {length: 64, nullable: false})
    password: string

    @Column('varchar', {length: 200, nullable: false})
    salt: string

    @Column('varchar', {length: 20, unique: true, nullable: true})
    mobile: string

    @Column('varchar', {length: 200, unique: true, nullable: false})
    email: string

    @Column({type: 'enum', enum: userStatus, default: userStatus.ACTIVE})
    status: userStatus

    @Column('jsonb', {nullable: true})
    avatar: object

    @Column('varchar', {nullable: true, length: 200})
    timezone: string

    @Column('jsonb', {nullable: false})
    favorites_id: object

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}