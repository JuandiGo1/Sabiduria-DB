import pkg from 'sqlite3'
const { verbose } = pkg
const sqlite3 = verbose()
const db = new sqlite3.Database('sabiduria.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err)
    } else {
        console.log('Conexión exitosa a la base de datos')
    }
})

export default db
