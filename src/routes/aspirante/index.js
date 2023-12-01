import { Router } from 'express'
import {
    getAspiranteById,
    getAspirantes,
    insertAspiranteToDB,
    updateIdProg,
    updateStep,
    aspirantePorPeriodo,
    AspirantesCount
} from 'controllers/aspirante.js'

const router = new Router()

router.get('/', getAspirantes)
router.get('/count', AspirantesCount)
router.get('/periodo', aspirantePorPeriodo)
router.get('/:id', getAspiranteById)
router.post('/insert', insertAspiranteToDB)
router.post('/updateProgram', updateIdProg)
router.post('/updateStep', updateStep)

export default router
