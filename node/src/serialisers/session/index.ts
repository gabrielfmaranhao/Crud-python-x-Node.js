import * as yup from "yup";

export const sessionLoginSerializer = yup.object().shape({
    username: yup.string().required('Campo email é obrigatório'),
    password: yup.string().required('Campo password é obrigatório')
})