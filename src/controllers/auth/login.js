import { usuarioHandler } from 'db/handler.js'

export const login = async (req, res) => {
    const { user, pass } = req.body

    if (!validateUser(user)) {
        return res.status(400).json({ error: 'Usuario inválido' })
    }

    if (!validatePassword(pass)) {
        return res.status(400).json({ error: 'Contraseña inválida' })
    }

    const usuario = await usuarioHandler.getById(user)

    if (!usuario) {
        return res.status(400).json({ error: 'Usuario no encontrado' })
    }

    if (usuario.contrasena !== pass) {
        return res.status(400).json({ error: 'Contraseña incorrecta' })
    }

    res.status(200).json({ message: 'Usuario encontrado' })
}

function validateUser(user) {
    return true // Aquí debes implementar la lógica de validación del usuario
}

function validatePassword(pass) {
    return true // Aquí debes implementar la lógica de validación de la contraseña
}
