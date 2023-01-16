import * as yup from "yup"

export const validationUserRegister = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    is_superuser: yup.boolean().notRequired()
})

export const validationUserLogin =  yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})

export const validationUserUpdate = yup.object().shape({
    username: yup.string().notRequired().transform((value)=> value ? value: undefined),
    email: yup.string().email().notRequired().transform((value)=> value ? value: undefined),
    password: yup.string().notRequired().transform((value)=> value ? value: undefined)
})