import dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT || 3001;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const DB = process.env.DB;
export const SECRET_KEY= process.env.SECRET_KEY