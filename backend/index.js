import express from 'express'
import {config} from 'dotenv'
import mysql from 'mysql2/promise'

config()


const pool = mysql.createPool({

    database:process.env.DATABASE,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    user:process.env.USER
})


const getEmployees = async ()=>{
    // try {

      let row =   await pool.query('SELECT * FROM users ')
        return row
    // } catch (error) {
    //     return 'err'
    // }
}

console.log(await getEmployees());




const app = express()

const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
} )