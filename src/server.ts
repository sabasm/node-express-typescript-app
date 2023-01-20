import http from 'http';
import app from "./app";
import config from "./config";

const server: http.Server = http.createServer(app);

server.listen(config.express.port, () => {
    console.log(`Server running at ${config.express.serverUrl}`);
});

export default server;