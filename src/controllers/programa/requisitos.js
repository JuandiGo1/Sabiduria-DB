// import db from '../../db/index.js'
import { requisitosHandler } from '../../db/handler.js'

export async function getRequisitos(req, res) {
    try {
        const rows = await requisitosHandler.getAll()
        const response = {
            message: 'Requisitos obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los requisitos',
            error: true
        })
    }
}

export async function getRequisitoById(req, res) {
    try {
        const rows = await requisitosHandler.getById(req.params.id)
        const response = {
            message: `Requisito con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el requisito con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertRequisitoToDB(req, res) {
    const data = req.body

    try {
        const rows = await requisitosHandler.insert(data)
        const response = {
            message: `Requisito con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el requisito con id: ${data.id}`,
            error
        })
    }
}
