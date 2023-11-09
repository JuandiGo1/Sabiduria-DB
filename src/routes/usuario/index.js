import { Router } from 'express'
import {
    deleteUserById,
    getUserById,
    getUsers,
    insertUserToDB,
    setNumDocById,
    updateUserById
} from 'controllers/usuario.js'

const router = new Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.post('/insert', insertUserToDB)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', setNumDocById)

export default router
