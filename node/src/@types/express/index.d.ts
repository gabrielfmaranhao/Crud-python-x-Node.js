import * as express from "express"

declare global {
    namespace Express {
        interface Request {
            user: {
                user_id: number
                is_superuser: boolean
            }
        }
    }
}