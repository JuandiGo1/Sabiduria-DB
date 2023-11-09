// import db from 'db/index.js';
import { telefonoHandler } from 'db/handler.js'

export async function getTelefonos(req, res) {
    try {
        const rows = await telefonoHandler.getAll()
        const response = {
            message: 'Telefonos obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los telefonos',
            error: true
        })
    }
}

export async function getTelefonoById(req, res) {
    try {
        const rows = await telefonoHandler.getById(req.params.id)
        const response = {
            message: `Telefono con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el telefono con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertTelefonoToDB(req, res) {
    const data = req.body

    try {
        const rows = await telefonoHandler.insert(data)
        const response = {
            message: `Telefono con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el telefono con id: ${data.id}`,
            error
        })
    }
}
