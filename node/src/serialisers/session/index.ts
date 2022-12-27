import * as yup from "yup";

export const sessionLoginSerializer = yup.object().shape({
    username: yup.string().required('This field username is required.'),
    password: yup.string().required('This field password is required.')
})