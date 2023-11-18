import { Router } from 'express'
import { login, renewSession } from 'controllers/auth/login.js'
import cookieParser from 'cookie-parser'

const router = new Router()
router.use(cookieParser())

router.post('/', login)
router.post('/renew', renewSession)

export default router
