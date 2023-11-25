// import db from "../db/index.js";
import { programaHandler, areaHandler } from '../../db/handler.js'

// const table = 'Programa'

export async function getProgramas(req, res) {
    try {
        const rows = await programaHandler.getAll()
        const response = {
            message: 'Programas obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los programas',
            error: true
        })
    }
}

export async function getProgramaById(req, res) {
    try {
        const rows = await programaHandler.getById(req.params.id)
        const response = {
            message: `Programa con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el programa con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function getProgramaBySlug(req, res) {
    try {
        const rows = await programaHandler.getByColumn('slug', req.params.slug)
        const areas = await areaHandler.getByColumn('id_pro', rows[0].id_pro)
        const response = {
            message: `Programa con slug: ${req.params.slug} obtenido correctamente`,
            data: {
                ...rows[0],
                areas
            }
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el programa con slug: ${req.params.slug}`,
            error: true
        })
    }
}

export async function insertProgramaToDB(req, res) {
    const data = req.body

    try {
        const rows = await programaHandler.insert(data)
        const response = {
            message: `Programa con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el programa con id: ${data.id}`,
            error
        })
    }
}
