import { authRepository } from "../repository";
import AuthServices from "./auth.services";

const authServices = new AuthServices(authRepository);

export {
    AuthServices,
    authServices
}