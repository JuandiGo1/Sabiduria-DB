import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const connectToDatabase = async () => {
    try {
        const db = await open({
            filename: 'sabiduria.db',
            driver: sqlite3.Database
        })
        console.log('Conexión exitosa a la base de datos')
        return db
    } catch (err) {
        console.error('Error al abrir la base de datos', err)
        throw err
    }
}

const db = await connectToDatabase()

export default db
