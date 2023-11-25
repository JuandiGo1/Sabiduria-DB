// import db from "../../db/index.js";

import { areaHandler } from '../../db/handler.js'

export async function getAreas(req, res) {
    try {
        const rows = await areaHandler.getAll()
        const response = {
            message: 'Areas obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los areas',
            error: true
        })
    }
}

export async function getAreaById(req, res) {
    try {
        const rows = await areaHandler.getById(req.params.id)
        const response = {
            message: `Area con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el area con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function getAreaById_pro(req, res) {
    try {
        const rows = await areaHandler.getByColumn('id_pro', req.params.id_pro)
        const response = {
            message: `Area con id_pro: ${req.params.id_pro} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el area con id_pro: ${req.params.id_pro}`,
            error: true
        })
    }
}

export async function insertAreaToDB(req, res) {
    const data = req.body

    try {
        const rows = await areaHandler.insert(data)
        const response = {
            message: `Area con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el area con id: ${data.id}`,
            error
        })
    }
}
