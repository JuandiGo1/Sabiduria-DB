// import db from "../db/index.js";
import {
    programaHandler,
    areaHandler,
    objetivoHandler
} from '../../db/handler.js'

import { getAsignaturasbyAreas } from './util.js'
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
        const rows = await programaHandler.getByColumn('id_pro', req.params.id)
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
        const objetivos = await objetivoHandler.getByColumn(
            'id_pro',
            rows[0].id_pro
        )
        const areas_ids = areas.map((area) => area.id_area)
        const asignaturas = await getAsignaturasbyAreas(areas_ids)
        // console.log(asignaturas)
        const response = {
            message: `Programa con slug: ${req.params.slug} obtenido correctamente`,
            data: {
                ...rows[0],
                areas,
                objetivos,
                asignaturas
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

export async function programaCount(req, res) {
    try {
        const rows = await programaHandler.count()
        const response = {
            message: 'Programas contados correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al contar los programas',
            error: true
        })
    }
}

export async function mostCommonProgram(req, res) {
    try {
        const rows = await programaHandler.mostRepeatedByColumn('nom_pro')
        const response = {
            message: 'Programa más común obtenido correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener el programa más común',
            error: true
        })
        console.log(error)
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

export async function insertObjetivo(req, res) {
    const data = req.body

    try {
        const rows = await objetivoHandler.insert(data)
        const response = {
            message: `Objetivo con id: ${data.id} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: `se produjo un error al insertar el objetivo con id: ${data.id}`,
            error
        })
    }
}
