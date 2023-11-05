import db from '../db/index.js'

export function getAspirantes(req, res) {
    db.all('SELECT * FROM Aspirante', [], (err, rows) => {
        if (err) {
            res.status(400).json({
                error: 'Se produjo un error al obtener los aspirantes'
            })
        }
        res.json(rows)
    })
}

export function getAspiranteById(req, res) {
    db.get(
        'SELECT * FROM Aspirante WHERE num_doc = ?',
        [req.params.id],
        (err, row) => {
            if (err) {
                res.status(400).json({
                    error: `se produjo un error al obtener el aspirante con id: ${req.params.id}`
                })
            }
            res.json(row)
        }
    )
}

export function insertAspiranteToDB(req, res) {
    const { correo } = req.body
    // check if correo exists in Usuario and if its num_Doc is null
    db.get(
        'SELECT * FROM Usuario WHERE correo = ? AND num_doc IS NULL',
        [correo],
        (err, row) => {
            if (err) {
                res.status(400).json({
                    error: `se produjo un error al obtener el usuario con correo: ${correo}`
                })
            }
            if (row) {
                const {
                    num_doc,
                    tipo_doc,
                    nom_asp,
                    apell_asp,
                    sexo,
                    fecha,
                    periodo,
                    id_pro
                } = req.body.aspirante

                const columns = Object.keys(req.body.aspirante).join(', ')
                const values = columns.map((column) => '?').join(', ')
                const dataArray = [
                    num_doc,
                    tipo_doc,
                    nom_asp,
                    apell_asp,
                    sexo,
                    fecha,
                    periodo,
                    id_pro
                ]

                const query = `INSERT INTO Aspirante (${columns}) VALUES (${values});`

                db.run(query, dataArray, (err, rows) => {
                    if (err) {
                        res.status(400).json({
                            error: `Se produjo un error al insertar el aspirante: ${nom_asp}`
                        })
                    }

                    // update the num_doc of the user with the given correo
                    updateNumDoc(correo, num_doc)
                    res.json({
                        message: 'Aspirante insertado correctamente',
                        data: req.body.aspirante
                    })
                })
            } else {
                res.status(400).json({
                    error: `El usuario con correo: ${correo} no existe o ya tiene un número de documento asociado`
                })
            }
        }
    )
}

function updateNumDoc(correo, num_doc) {
    const query = 'UPDATE Usuario SET num_doc = ? WHERE correo = ?;'
    const dataArray = [num_doc, correo]
    db.run(query, dataArray, (err, rows) => {
        if (err) {
            console.log({
                error: `Se produjo un error al actualizar el usuario con correo: ${correo}`
            })
        }
    })
}
