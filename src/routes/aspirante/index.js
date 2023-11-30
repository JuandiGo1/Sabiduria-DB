import { Router } from 'express'
import {
    getAspiranteById,
    getAspirantes,
    insertAspiranteToDB,
    updateIdProg,
    updateStep
} from 'controllers/aspirante.js'

const router = new Router()

router.get('/', getAspirantes)
router.get('/:id', getAspiranteById)
router.post('/insert', insertAspiranteToDB)
router.post('/updateProgram', updateIdProg)
router.post('/updateStep', updateStep)

export default router
