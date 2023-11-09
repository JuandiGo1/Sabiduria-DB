import { Router } from 'express'
import { getPagos, getPagoById, insertPagoToDB } from 'controllers/pago.js'

const router = new Router()

router.get('/', getPagos)
router.get('/:id', getPagoById)
router.post('/insert', insertPagoToDB)

export default router
