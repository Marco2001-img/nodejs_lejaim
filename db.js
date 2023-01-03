import { createPool } from "mysql2/promise";
import {
    BD_Host,
    BD_name,
    BD_password,
    BD_user,
    BD_port

}from './src/confing.js'

export const pool= createPool({
    host: BD_Host,
    user: BD_user,
    password: BD_password,
    port: BD_port,
    database: BD_name
})

console.log("conectado a mysql")

