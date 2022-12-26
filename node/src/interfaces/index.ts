export interface IUserRequest {
    username: string
    email: string
    password: string
    is_superuser?: boolean
}

export interface IUserResponse extends IUserRequest {
    id: number
    created_at: Date
    updated_at: Date
    is_active: boolean
    is_staff: boolean
}

export interface ISessionLogin {
    username: string
    password: string
}

export interface IUpdateUser {
    username: string
    email: string
    password: string
    is_superUser: boolean
}