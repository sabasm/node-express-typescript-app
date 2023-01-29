import config from '../../../config';
import UsersDB_dummy from './users.database.dummy';
const { environment: env } = config

let usersDB = new UsersDB_dummy();

if (env.isProduction) {
    // usersDB = new UsersDB_prod();
}

export {
    usersDB
}
