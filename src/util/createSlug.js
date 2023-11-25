import progrmas from 'db/seeds/programs.json' assert { type: 'json' }

function crearSlug(texto) {
    // Convierte a minúsculas
    let slug = texto.toLowerCase()

    // Elimina caracteres especiales excepto guiones y guiones bajos
    slug = slug.replace(/[^a-z0-9\-_]/g, '')

    // Reemplaza espacios con guiones
    slug = slug.replace(/\s+/g, '-')

    // Elimina duplicados de guiones
    slug = slug.replace(/-+/g, '-')

    // Corta la longitud si es necesario (por ejemplo, los primeros 50 caracteres)
    slug = slug.substring(0, 50)

    return slug
}

// Ejemplo de uso
for (const programa of progrmas) {
    programa.slug = crearSlug(programa.nom_pro)
}

// save to file
import fs from 'fs/promises'
const progrmasJSON = JSON.stringify(progrmas, null, 2)
fs.writeFile('src/db/seeds/programs.json', progrmasJSON)
console.log(` ✔️  ${progrmas.length} programs updated`)
