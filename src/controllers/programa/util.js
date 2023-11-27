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

// exporting asynchronous function that returns all the subjects by multiple areas
export async function getAsignaturasbyAreas(ids) {
    try {
        // Initializing empty array to store the subjects
        const asignaturas = {}

        if (!ids) return {}

        // Looping through each area id
        for (const id of ids) {
            // calling getByColumn method of areaHandler
            // passing column name 'id_area' and id
            const areas = await areaHandler.getByColumn('id_area', id)
            // calling getAsignaturasbyArea function
            // passing id
            const asignaturasbyArea = await getAsignaturasbyArea(id)
            // Storing the subjects in asignaturas array
            asignaturas[areas[0].nom_area] = asignaturasbyArea
        }

        return asignaturas
    } catch (error) {
        console.error('Error getting asignaturas by areas:', error)
    }
}
