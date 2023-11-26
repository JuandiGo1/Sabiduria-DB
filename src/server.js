import express, { json } from 'express'
import cors from 'cors'

import morgan from 'morgan'

import userRouter from 'routes/usuario/index.js'
import aspiranteRouter from 'routes/aspirante/index.js'
import direccionRouter from 'routes/direccion/index.js'
import telefonoRouter from 'routes/telefono/index.js'
import programaRouter from 'routes/programa/index.js'
import pagoRouter from 'routes/pago/index.js'
import authRouter from 'routes/auth/index.js'
import publicRouter from 'routes/public/index.js'

const app = express()
const port = 3000

// Configuración para recibir datos en formato JSON
app.use(json())
// Configuracion de morgan
app.use(morgan('dev'))
// Configuración de cors
app.use(
    cors({
        origin: '*' // Reemplazar con dominio
    })
)

// configuracion de archivos estaticos
app.use(express.static('src/public'))

// Configuración de las rutas
app.use('/', publicRouter)
app.use('/api/usuario', userRouter)
app.use('/api/aspirante', aspiranteRouter)
app.use('/api/direccion', direccionRouter)
app.use('/api/telefono', telefonoRouter)
app.use('/api/programa', programaRouter)
app.use('/api/pago', pagoRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
