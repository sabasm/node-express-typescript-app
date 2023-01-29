import { Container } from "inversify";
import { UserService } from "../services/user.services";
import { UsersRepository } from "../repositories/users.repository";
import "../controllers/user.controller";

const container = new Container();
container.bind(UserService).toSelf();
container.bind(UsersRepository).toSelf();

export default container;