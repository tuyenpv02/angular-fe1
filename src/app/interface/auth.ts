export interface typeLogin {
    email: String,
    password: String    
}

export interface typeLoginResponse {
    accessToken: string,
    user: {
        email: string
    }
}