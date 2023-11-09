// import db from 'db/index.js';
import { direccionHandler } from 'db/handler.js'

export async function getDirecciones(req, res) {
    try {
        const rows = await direccionHandler.getAll()
        const response = {
            message: 'Direcciones obtenidas correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener las direcciones',
            error: true
        })
    }
}

export async function getDireccionById(req, res) {
    try {
        const rows = await direccionHandler.getById(req.params.id)
        const response = {
            message: `Direccion con id: ${req.params.id} obtenida correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener la direccion con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertDireccionToDB(req, res) {
    const data = req.body

    try {
        const rows = await direccionHandler.insert(data)
        const response = {
            message: `Direccion con id: ${data.id} insertada correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar la direccion con id: ${data.id}`,
            error
        })
    }
}
