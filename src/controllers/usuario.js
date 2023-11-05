import db from '../db/index.js'
// import { usuarioHandler } from '../db/handler.js'

const table = 'Usuario'

export async function getUsers(req, res) {
    db.all('SELECT * FROM Usuario', [], (err, rows) => {
        if (err) {
            res.status(400).json({
                error: 'Se produjo un error al obtener los usuarios'
            })
        }
        res.json(rows)
    })
}

export function getUserById(req, res) {
    db.get(
        'SELECT * FROM usuario WHERE id = ?',
        [req.params.id],
        (err, row) => {
            if (err) {
                res.status(400).json({
                    error: `se produjo un error al obtener el usario con id: ${req.params.id}`
                })
            }
            res.json(row)
        }
    )
}

export function insertUserToDB(req, res) {
    const data = req.body
    console.log(req.body)
    // console.log(req)
    console.log(data)

    const columns = Object.keys(data).join(', ')
    const values = columns
        .split(', ')
        .map((column) => '?')
        .join(', ')
    const query = `INSERT INTO ${table} (${columns}) VALUES (${values});`
    console.log(query)

    const arrayData = []
    Object.keys(data).forEach((column) => {
        arrayData.push(data[column])
    })
    console.log(arrayData)

    db.run(query, arrayData, (err, rows) => {
        if (err) {
            res.status(400).json({
                error: `Se produjo un error al insertar el usuario: ${data.nombre}`
            })
        }
        res.json({
            message: 'Usuario insertado correctamente',
            data
        })
    })
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
