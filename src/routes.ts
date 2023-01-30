import { usersRouter } from "./components/users/router";
import { authRouter, AuthRoutes } from "./components/auth/router";

export const API = [
    usersRouter
]
export const AUTH ={ 
    AuthRoutes,
    authRouter 
}