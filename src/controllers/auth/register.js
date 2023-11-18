import { usuarioHandler } from 'db/handler.js'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    const { user, pass } = req.body
    console.log(user, pass)

    if (!validateUser(user)) {
        return res.status(400).json({ error: 'Usuario inválido' })
    }

    if (!validatePassword(pass)) {
        return res.status(400).json({ error: 'Contraseña inválida' })
    }

    const usuario = await usuarioHandler.getById(user)

    if (usuario) {
        console.log(usuario)
        return res.status(400).json({ error: 'Usuario ya existe' })
    }
    // console.log(pass)

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pass, salt)
    console.log(hash)

    const newUser = {
        correo: user,
        contrasena: hash
    }

    try {
        await usuarioHandler.insert(newUser)

        res.status(200).json({ message: 'Usuario creado' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error al crear usuario' })
    }
}

function validateUser(user) {
    return true // Aquí debes implementar la lógica de validación del usuario
}

async function validatePassword(pass) {
    return true // Aquí debes implementar la lógica de validación de la contraseña
}
