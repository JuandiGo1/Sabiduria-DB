import { usuarioHandler } from 'db/handler.js'

export const register = async (req, res) => {
    const { user, pass } = req.body

    if (!validateUser(user)) {
        return res.status(400).json({ error: 'Usuario inválido' })
    }

    if (!validatePassword(pass)) {
        return res.status(400).json({ error: 'Contraseña inválida' })
    }

    const usuario = await usuarioHandler.getById(user)

    if (usuario) {
        return res.status(400).json({ error: 'Usuario ya existe' })
    }

    const newUser = {
        usuario: user,
        contrasena: pass
    }

    try {
        await usuarioHandler.insert(newUser)

        res.status(200).json({ message: 'Usuario creado' })
    } catch (error) {
        res.status(400).json({ error: 'Error al crear usuario' })
    }
}

function validateUser(user) {
    return true // Aquí debes implementar la lógica de validación del usuario
}

function validatePassword(pass) {
    return true // Aquí debes implementar la lógica de validación de la contraseña
}
