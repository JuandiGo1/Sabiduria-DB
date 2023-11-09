import { Router } from 'express'

import loginRouter from './login.js'

const router = new Router()

router.use('/login', loginRouter)

export default router
