import { Router } from 'express'

import {
    getRequisitoById,
    getRequisitos,
    insertRequisitoToDB
} from '../../../controllers/programa/requisitos.js'

const router = new Router()

router.get('/', getRequisitos)
router.get('/:id', getRequisitoById)
router.post('/insert', insertRequisitoToDB)

export default router
