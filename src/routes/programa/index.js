import { Router } from 'express'

import {
    getProgramaById,
    getProgramas,
    insertProgramaToDB,
    getProgramaBySlug,
    programaCount,
    mostCommonProgram,
    insertObjetivo
} from 'controllers/programa/programa.js'

import areaRouter from './area/index.js'
import requisitosRouter from './requisitos/index.js'

const router = new Router()

router.use('/area', areaRouter)
router.use('/requisitos', requisitosRouter)

router.get('/', getProgramas)
router.get('/count', programaCount)
router.get('/most-common', mostCommonProgram)
router.get('/:id', getProgramaById)
router.post('/insert', insertProgramaToDB)
router.get('/slug/:slug', getProgramaBySlug)
router.post('/objetivo/insert', insertObjetivo)

export default router
