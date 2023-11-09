import { Router } from 'express'
import { login } from 'controllers/auth/login.js'

const router = new Router()

router.post('/', login)

export default router
