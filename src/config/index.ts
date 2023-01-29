//environment variables
const environment = {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test'
};

//export basic config for express
const express = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    get serverUrl(): string {
        return `http://${this.host}:${this.port}`;
    }
};

//export basic config for mongoDB database
const db = {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/express-ts'
};

//export all configs
export default {
    environment,
    express,
    db
};

