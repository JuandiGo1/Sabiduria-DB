import { Router } from 'express'
import { register } from 'controllers/auth/register.js'

const router = new Router()

router.post('/', register)

export default router
