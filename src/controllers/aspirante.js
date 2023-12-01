import db from 'db/index.js'
import { aspiranteHandler } from 'db/handler.js'

export async function getAspirantes(req, res) {
    try {
        const rows = await aspiranteHandler.getAll()
        const response = {
            message: 'Aspirantes obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los aspirantes',
            error: true
        })
    }
}

export async function getAspiranteById(req, res) {
    try {
        const rows = await aspiranteHandler.getByColumn(
            'num_doc',
            req.params.id
        )
        const response = {
            message: `Aspirante con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el aspirante con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertAspiranteToDB(req, res) {
    try {
        const { correo, aspirante } = req.body
        // check if correo exists in Usuario and if its num_Doc is null
        const user = await db.get(
            'SELECT * FROM Usuario WHERE correo = ? AND num_doc IS NULL',
            [correo]
        )

        if (user) {
            await aspiranteHandler.insert(aspirante)

            // update the num_doc of the user with the given correo
            await updateNumDoc(correo, aspirante.num_doc)

            res.json({
                message: 'Aspirante insertado correctamente',
                data: req.body.aspirante
            })
        } else {
            res.status(400).json({
                error: `El usuario con correo: ${correo} no existe o ya tiene un número de documento asociado`
            })
        }
    } catch (error) {
        console.log('Error:', error)
        res.status(400).json({
            error: `Se produjo un error al insertar el aspirante: ${error.message}`
        })
    }
}

export async function AspirantesCount(req, res) {
    try {
        const rows = await aspiranteHandler.count()
        const response = {
            message: 'Cantidad de aspirantes obtenida correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener la cantidad de aspirantes',
            error: true
        })
    }
}

async function updateNumDoc(correo, num_doc) {
    try {
        await db.run('UPDATE Usuario SET num_doc = ? WHERE correo = ?', [
            num_doc,
            correo
        ])
    } catch (error) {
        console.log(error)
    }
}

export async function updateIdProg(req, res) {
    const { num_Doc, id_pro } = req.body
    try {
        await db.run('UPDATE Aspirante SET id_pro = ? WHERE num_Doc = ?', [
            id_pro,
            num_Doc
        ])

        res.json({
            message: 'Programa actualizado correctamente',
            data: req.body.num_Doc
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: `Se produjo un error actualizar el programa: ${error.message}`
        })
    }
}

export async function updateStep(req, res) {
    const { correo, paso } = req.body
    try {
        await db.run('UPDATE Usuario SET paso = ? WHERE correo = ?', [
            paso,
            correo
        ])
        res.json({
            message: 'Paso modificado correctamente.',
            data: req.body.num_Doc
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: `Se produjo un error actualizar el paso: ${error.message}`
        })
    }
}

function groupby(arr, prop) {
    return arr.reduce(function (groups, item) {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
    }, {})
}

export async function aspirantePorPeriodo(req, res) {
    try {
        const rows = await db.all(`
			SELECT Asp.periodo, COUNT(*) as Total_Inscritos, Usu.paso
			FROM Aspirante Asp
			JOIN Usuario Usu ON Asp.num_doc = Usu.num_doc
			GROUP BY Asp.periodo, Usu.paso;
		`)

        // agrupar rows por periodo
        // por cada periodo, agrupar por paso
        // por cada paso, contar cuantos hay
        const response = {
            message: 'Cantidad de aspirantes obtenida correctamente',
            data: groupby(rows, 'periodo')
        }

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error: `Se produjo un error actualizar el paso: ${error.message}`
        })
    }
}
