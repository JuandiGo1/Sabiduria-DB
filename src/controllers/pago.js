// import db from '../db/index.js'

import { pagoHandler } from '../db/handler.js'

export async function getPagos(req, res) {
    try {
        const rows = await pagoHandler.getAll()
        const response = {
            message: 'Pagos obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los pagos',
            error: true
        })
    }
}

export async function getPagoById(req, res) {
    try {
        const rows = await pagoHandler.getById(req.params.id)
        const response = {
            message: `Pago con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el pago con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertPagoToDB(req, res) {
    const data = req.body

    try {
        const rows = await pagoHandler.insert(data)
        const response = {
            message: `Pago con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el pago con id: ${data.id}`,
            error
        })
    }
}
