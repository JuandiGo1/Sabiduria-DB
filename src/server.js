import express, { json } from 'express'

import morgan from 'morgan'

import userRouter from './routes/usuario/index.js'

const app = express()
const port = 3000

// Configuración para recibir datos en formato JSON
app.use(json())
// Configuracion de morgan
app.use(morgan('dev'))

// Configuración de las rutas
app.use('/usuario', userRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
