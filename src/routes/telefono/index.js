import { Router } from 'express'

import {
    getTelefonoById,
    getTelefonos,
    insertTelefonoToDB
} from 'controllers/telefono.js'

const router = new Router()

router.get('/', getTelefonos)
router.get('/:id', getTelefonoById)
router.post('/insert', insertTelefonoToDB)

export default router
