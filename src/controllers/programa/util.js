// Importing necessary module from db
import { asignaturaHandler, areaHandler } from 'db/handler.js'

// exporting asynchronous function that returns all the subjects by area
export async function getAsignaturasbyArea(id_area) {
    try {
        // calling getByColumn method of asignaturaHandler
        // passing column name 'id_area' and id_area
        const asignaturas = await asignaturaHandler.getByColumn(
            'id_area',
            id_area
        )
        return asignaturas
    } catch (error) {
        console.error('Error getting asignaturas by area:', error)
    }
}

export async function getAreaById(id_area) {
    try {
        // calling getByColumn method of asignaturaHandler
        // passing column name 'id_area' and id_area
        const area = await areaHandler.getByColumn('id_area', id_area)
        return area
    } catch (error) {
        console.error('Error getting asignaturas by area:', error)
    }
}

// exporting asynchronous function that returns all the subjects by multiple areas
export async function getAsignaturasbyAreas(ids) {
    try {
        // Initializing empty array to store the subjects
        const asignaturas = []

        if (!ids) return []

        // Looping through each area id
        for (const id of ids) {
            // calling getByColumn method of areaHandler
            // passing column name 'id_area' and id

            // calling getAsignaturasbyArea function
            // passing id
            const asignaturasbyArea = await getAsignaturasbyArea(id)
            // insertar todos los elementos de asignarutaByarea en asignaturas
            asignaturas.push(...asignaturasbyArea)
        }
        // agrupar las asignaturas por categoria
        const asignaturasByCategory = asignaturas.reduce((acc, asignatura) => {
            const category = asignatura.categoria
            if (!acc[category]) {
                acc[category] = []
            }
            acc[category].push(asignatura)
            return acc
        }, {})

        return Object.entries(asignaturasByCategory)
    } catch (error) {
        console.error('Error getting asignaturas by areas:', error)
    }
}
