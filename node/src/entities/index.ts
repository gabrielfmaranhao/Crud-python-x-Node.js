import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users_user")
class User {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({type:'varchar', length: 150, unique:true})
    username: string
    @Column({type:'varchar', length:254, unique:true})
    email: string
    @Column({type:'varchar', length:128})
    password: string
    @Column({type:'boolean', default: false, nullable:true})
    is_superuser: boolean
    @Column({type:'boolean', default: true, nullable:true})
    is_active: boolean
    @Column({type:'boolean', default: false, nullable:true})
    is_staff: boolean
    @CreateDateColumn({type:"timestamptz"})
    created_at: Date
    @UpdateDateColumn({type:"timestamptz"})
    updated_at: Date
}

export default User