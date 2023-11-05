import db from '../db/index.js'

export function getUsers(req, res) {
    db.all('SELECT * FROM usuario', (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message })
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
                res.status(400).json({ error: err.message })
            }
            res.json(row)
        }
    )
}

export function insertUserToDB(req, res) {}
