import { Router } from 'express'

import {
    getAreaById,
    getAreas,
    insertAreaToDB
} from '../../../controllers/programa/area.js'

import asignaturaRouter from './asignatura/index.js'

const router = new Router()

router.use('/asignatura', asignaturaRouter)

router.get('/', getAreas)
router.get('/:id', getAreaById)
router.post('/insert', insertAreaToDB)

export default router
