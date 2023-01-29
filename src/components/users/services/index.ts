import { usersRepository } from "../repository";
import UsersServices from "./user.services";

const usersServices = new UsersServices(usersRepository);

export {
    UsersServices,
    usersServices
}