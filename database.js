import mysql from 'mysql'

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'matrinomial_db'
})
export const connectt= async ()=>   {
    return await connection.connect()
}
export default connection