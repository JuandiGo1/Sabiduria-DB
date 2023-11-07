import db from '../db/index.js'
import { usuarioHandler } from '../db/handler.js'

const table = 'Usuario'

export async function getUsers(req, res) {
    try {
        const rows = await usuarioHandler.getAll()
        const response = {
            message: 'Usuarios obtenidos correctamente',
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: 'Se produjo un error al obtener los usuarios',
            error: true
        })
    }
}

export async function getUserById(req, res) {
    try {
        const rows = await usuarioHandler.getById(req.params.id)
        const response = {
            message: `Usuario con id: ${req.params.id} obtenido correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al obtener el usuario con id: ${req.params.id}`,
            error: true
        })
    }
}

export async function insertUserToDB(req, res) {
    const data = req.body

    try {
        const rows = await usuarioHandler.insert(data)
        const response = {
            message: `Usuario con correo: ${data.correo} insertado correctamente`,
            data: rows
        }
        res.json(response)
    } catch (error) {
        res.status(400).json({
            message: `se produjo un error al insertar el usuario con correo: ${data.correo}`,
            error
        })
    }
}

export function updateUserById(req, res) {
    const data = req.body
    const columns = Object.keys(data)
        .map((column) => `${column} = ?`)
        .join(', ')
    const query = `UPDATE ${table} SET ${columns} WHERE correo = ?;`
    const arrayData = []
    Object.keys(data).forEach((column) => {
        arrayData.push(data[column])
    })
    arrayData.push(req.params.id)
    db.run(query, arrayData, (err, rows) => {
        if (err) {
            res.status(400).json({
                error: `Se produjo un error al actualizar por el id: ${req.params.id}`
            })
        }
        res.json({
            message: 'Usuario actualizado correctamente',
            data
        })
    })
}

export function deleteUserById(req, res) {
    db.run(
        `DELETE FROM ${table} WHERE correo = ?`,
        [req.params.id],
        (err, rows) => {
            if (err) {
                res.status(400).json({
                    error: `Se produjo un error al eliminar por el id: ${req.params.id}`
                })
            }
            res.json({
                message: 'Usuario eliminado correctamente',
                changes: this.changes
            })
        }
    )
}

export function setNumDocById(req, res) {
    const { numDoc } = req.body
    const { id } = req.params

    db.run(
        `UPDATE ${table} SET num_doc = ? WHERE id = ?`,
        [numDoc, id],
        (err, rows) => {
            if (err) {
                res.status(400).json({
                    error: `Se produjo un error al actualizar el numero de documento del usuario con id: ${id}`
                })
            }
            res.json({
                message: 'Usuario actualizado correctamente',
                changes: this.changes
            })
        }
    )
}
