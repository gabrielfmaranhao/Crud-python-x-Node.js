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
}