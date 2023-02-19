import axios from "axios"

export const postLoginUser = (email, password) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return axios
    .post('api/users/login', {email, password}, config)
}