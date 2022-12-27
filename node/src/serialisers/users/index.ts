import * as yup from "yup";

export const createUserSerializer = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    is_superuser: yup.boolean().notRequired().default(false),
    is_active: yup.boolean().notRequired().default(true),
    created_at: yup.date().notRequired().default(new Date),
    updated_at: yup.date().notRequired().default(new Date),
    is_staff: yup.ref("is_superuser")
})

export const updateUserSerializer = yup.object().shape({
    username: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    is_superuser: yup.boolean().notRequired()
})