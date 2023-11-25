import { Router } from 'express'

import {
    getAreaById,
    getAreaById_pro,
    getAreas,
    insertAreaToDB
} from 'controllers/programa/area.js'

import asignaturaRouter from './asignatura/index.js'

const router = new Router()

router.use('/asignatura', asignaturaRouter)

router.get('/', getAreas)
router.get('/:id', getAreaById)
router.post('/insert', insertAreaToDB)
router.get('/p/:id_pro', getAreaById_pro)

export default router
