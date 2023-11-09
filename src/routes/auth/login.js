import { Router } from 'express'
import { login } from '../../controllers/auth/login.js'

const router = new Router()

router.get('/', login)

export default router
