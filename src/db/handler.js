import db from './index.js'

export class Handler {
    columns = []
    table = ''

    constructor(db, table) {
        this.table = table
    }

    // setter for columns
    setColumns(columns) {
        this.columns = columns
    }

    async init() {
        await this.getTableColumns(db, this.table)
    }

    // Helper function to get table columns
    async getTableColumns(db, table) {
        try {
            const rows = await db.all(`PRAGMA table_info(${table});`)
            const columns = rows.map((row) => row.name)
            this.setColumns(columns)
        } catch (error) {
            throw error
        }
    }

    // Use async/await for getAll, getById, insert, and query methods
    async getAll() {
        try {
            const rows = await db.all(`SELECT * FROM ${this.table};`)
            return rows
        } catch (error) {
            throw error
        }
    }

    async getById(id) {
        try {
            const rows = await db.all(
                `SELECT * FROM ${this.table} WHERE correo = ?;`,
                [id]
            )
            return rows
        } catch (error) {
            throw error
        }
    }

    async insert(data) {
        const columns = Object.keys(data).join(', ')
        const values = columns
            .split(', ')
            .map((column) => '?')
            .join(', ')

        const arrayData = []
        Object.keys(data).forEach((column) => {
            arrayData.push(data[column])
        })

        const query = `INSERT INTO ${this.table} (${columns}) VALUES (${values});`

        try {
            const rows = await db.run(query, arrayData)
            return rows
        } catch (error) {
            throw error
        }
    }
}

const usuarioHandler = new Handler(db, 'Usuario')
const aspiranteHandler = new Handler(db, 'Aspirante')
const direccionHandler = new Handler(db, 'Direccion')
const telefonoHandler = new Handler(db, 'Telefono')
const programaHandler = new Handler(db, 'Programa')
const areaHandler = new Handler(db, 'Area')
const asignaturaHandler = new Handler(db, 'Asignatura')
const requisitosHandler = new Handler(db, 'Requisitos')
const pagoHandler = new Handler(db, 'Pago')

// Initialize the handler
;(async () => {
    try {
        await usuarioHandler.init()
        await aspiranteHandler.init()
        await direccionHandler.init()
        await telefonoHandler.init()
        await programaHandler.init()
        await areaHandler.init()
        await asignaturaHandler.init()
        await requisitosHandler.init()
        await pagoHandler.init()
        // You can now use usuarioHandler
    } catch (error) {
        console.error(error)
    }
})()

export {
    usuarioHandler,
    aspiranteHandler,
    direccionHandler,
    telefonoHandler,
    programaHandler,
    areaHandler,
    asignaturaHandler,
    requisitosHandler,
    pagoHandler
}
