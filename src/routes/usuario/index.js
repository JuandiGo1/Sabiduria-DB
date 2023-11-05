import { Router } from 'express'
import {
    getUserById,
    getUsers,
    insertUserToDB
} from '../../controllers/usuario.js'

const router = new Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/insert', insertUserToDB)

export default router
