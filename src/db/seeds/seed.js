/**ignore the assert */

import { areaHandler, programaHandler, usuarioHandler } from '../handler.js'

import dataToInsertPrograma from './programs.json' assert { type: 'json' }
import dataToInsertArea from './areas.json' assert { type: 'json' }
import dataToInsertUsuario from './usuario.json' assert { type: 'json' }

// Data to be inserted

// Function to insert data into the specified table
async function insertData(handler, data) {
    try {
        // Initialize the handler
        await handler.init()

        // Insert each record
        for (const record of data) {
            await handler.insert(record)
        }

        console.log(`Data inserted into ${handler.table} successfully.`)
    } catch (error) {
        console.error(`Error inserting data into ${handler.table}:`, error)
    }
}

export async function seed() {
    // Insert data into each table
    insertData(programaHandler, dataToInsertPrograma)
    insertData(areaHandler, dataToInsertArea)
    insertData(usuarioHandler, dataToInsertUsuario)
    // insertData(aspiranteHandler, dataToInsert)
    // insertData(direccionHandler, dataToInsert)
    // ... (insert data for other tables)
}
