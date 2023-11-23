import { usuarioHandler } from 'db/handler.js'
import bcrypt from 'bcrypt'
import Cookies from 'js-cookie'
import { v4 as uuid } from 'uuid'

const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 60 * 24 // 7 days
}

export const login = async (req, res) => {
    const { user, pass } = req.body
    console.log(user, pass)

    if (!validateUser(user)) {
        return res.status(400).json({ error: 'Usuario inválido' })
    }

    if (!validatePassword(pass)) {
        return res.status(400).json({ error: 'Contraseña inválida' })
    }

    const usuario = await usuarioHandler.getById(user)
    console.log(usuario)

    if (!usuario) {
        return res.status(400).json({ error: 'Usuario no encontrado' })
    }

    if ((await checkPassword(pass, usuario.contrasena)) === false) {
        // console.log(usuario.contrasena, pass)
        return res.status(400).json({ error: 'Contraseña incorrecta' })
    }

    // Create session cookie
    const sessionCookie = createSessionCookie(user)

    // Set the session cookie in the response
    res.cookie('session', sessionCookie, cookieOptions)

    res.status(200).json({ message: 'Usuario encontrado' })
}

export const renewSession = async (req, res) => {
    const sessionCookie = req.cookies.session

    if (!sessionCookie) {
        return res.status(400).json({ error: 'Sesión no encontrada' })
    }

    // extract data from de cookie using Cookie
    const { user, ...rest } = sessionCookie
    console.log(rest)
    // Create session cookie
    const newSessionCookie = createSessionCookie(user)

    // Set the session cookie in the response
    res.cookie('session', newSessionCookie, cookieOptions)

    res.status(200).json({ message: 'Sesión renovada' })
}

function validateUser(user) {
    return true // Aquí debes implementar la lógica de validación del usuario
}

function validatePassword(pass) {
    return true // Aquí debes implementar la lógica de validación de la contraseña
}

async function checkPassword(pass, hashedPass) {
    const compare = await bcrypt.compare(pass, hashedPass)
    return compare
}

function createSessionCookie(user) {
    // Generate a unique session ID
    const sessionId = generateSessionId()

    const sesion = {
        id: sessionId,
        user
    }

    // Set the session ID in the cookie
    Cookies.set('session', sesion, { expires: 7 })

    return sesion
}

function generateSessionId() {
    // Generate a random session ID using a library or algorithm of your choice
    // For example, you can use the uuid library to generate a UUID
    const sessionId = uuid()

    return sessionId
}
