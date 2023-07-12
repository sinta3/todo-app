import { registerAs } from '@nestjs/config'

export default registerAs('db', () => ({
    database_host: process.env.DATABASE_HOST,
    database_name: process.env.DATABASE_NAME,
    database_user: process.env.DATABASE_USER,
    database_password: process.env.DATABASE_PASSWORD,
    database_port: process.env.DATABASE_PORT
}))