// import db from '../db/index.js'

import { asignaturaHandler } from '../../db/handler.js'

export async function getAsignaturas(req, res) {
    try {
        const rows = await asignaturaHandler.getAll()
        const response = {
            message: 'Asignaturas obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los asignaturas',
            error: true
        })
    }
}

export async function getAsignaturaById(req, res) {
    try {
        const rows = await asignaturaHandler.getById(req.params.id)
        const response = {
            message: `Asignatura con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el asignatura con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertAsignaturaToDB(req, res) {
    const data = req.body

    try {
        const rows = await asignaturaHandler.insert(data)
        const response = {
            message: `Asignatura con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el asignatura con id: ${data.id}`,
            error
        })
    }
}
