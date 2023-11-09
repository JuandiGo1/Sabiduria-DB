import { Router } from 'express'
import {
    getDireccionById,
    getDirecciones,
    insertDireccionToDB
} from 'controllers/direccion.js'

const router = new Router()

router.get('/', getDirecciones)
router.get('/:id', getDireccionById)
router.post('/insert', insertDireccionToDB)

export default router
