import { Router } from 'express'

import {
    getProgramaById,
    getProgramas,
    insertProgramaToDB
} from 'controllers/programa/programa.js'

import areaRouter from './area/index.js'
import requisitosRouter from './requisitos/index.js'

const router = new Router()

router.use('/area', areaRouter)
router.use('/requisitos', requisitosRouter)

router.get('/', getProgramas)
router.get('/:id', getProgramaById)
router.post('/insert', insertProgramaToDB)

export default router