import { Router } from 'express'
import {
    getAspiranteById,
    getAspirantes,
    insertAspiranteToDB
} from '../../controllers/aspirante.js'

const router = new Router()

router.get('/', getAspirantes)
router.get('/:id', getAspiranteById)
router.post('/insert', insertAspiranteToDB)

export default router
