import { Router } from 'express'

import {
    getAsignaturaById,
    getAsignaturas,
    insertAsignaturaToDB
} from 'controllers/programa/asignatura.js'

const router = new Router()

router.get('/', getAsignaturas)
router.get('/:id', getAsignaturaById)
router.post('/insert', insertAsignaturaToDB)

export default router
