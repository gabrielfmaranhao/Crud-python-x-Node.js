import * as yup from "yup"

export const validationUserRegister = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    is_superuser: yup.boolean().notRequired()
})

export const validationUserLogin =  yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})