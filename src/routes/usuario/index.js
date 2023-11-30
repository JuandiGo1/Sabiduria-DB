import { Router } from 'express'
import {
    deleteUserById,
    getUserById,
    getUsers,
    insertUserToDB,
    setNumDocById,
    updateUserById,
    usersCount,
    loggedUser
} from 'controllers/usuario.js'

import cookieParser from 'cookie-parser'

const router = new Router()

router.use(cookieParser())

router.get('/', getUsers)
router.get('/count', usersCount)
router.get('/user', loggedUser)
router.get('/:id', getUserById)
router.post('/insert', insertUserToDB)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', setNumDocById)

export default router
