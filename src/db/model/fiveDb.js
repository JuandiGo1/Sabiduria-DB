import db from '../index.js'
import { seed } from '../seeds/seed.js'

const createTable = async (tableName, sql) => {
    try {
        await db.run(sql)
        console.log(
            `Llamado a la creación de la tabla ${tableName} realizado correctamente`
        )
    } catch (error) {
        console.error(`Error al crear la tabla ${tableName}:`, error)
    }
}

const dropDatabase = async () => {
    try {
        await db.run('DROP TABLE IF EXISTS Programa')
        console.log('Table Programa dropped successfully')

        await db.run('DROP TABLE IF EXISTS Requisitos')
        console.log('Table Requisitos dropped successfully')

        await db.run('DROP TABLE IF EXISTS Requisitos_cumplidos')
        console.log('Table Requisitos_cumplidos dropped successfully')

        await db.run('DROP TABLE IF EXISTS Aspirante')
        console.log('Table Aspirante dropped successfully')

        await db.run('DROP TABLE IF EXISTS Usuario')
        console.log('Table Usuario dropped successfully')

        await db.run('DROP TABLE IF EXISTS Admin')
        console.log('Table Admin dropped successfully')

        await db.run('DROP TABLE IF EXISTS Telefono')
        console.log('Table Telefono dropped successfully')

        await db.run('DROP TABLE IF EXISTS Direccion')
        console.log('Table Direccion dropped successfully')

        await db.run('DROP TABLE IF EXISTS Pago')
        console.log('Table Pago dropped successfully')

        await db.run('DROP TABLE IF EXISTS Area')
        console.log('Table Area dropped successfully')

        await db.run('DROP TABLE IF EXISTS Asignatura')
        console.log('Table Asignatura dropped successfully')

        await db.run('DROP TABLE IF EXISTS Objetivos')
        console.log('Table Objetivos dropped successfully')

        console.log('Database dropped successfully')
    } catch (error) {
        console.error('Error dropping the database:', error)
    }
}

const createTables = async () => {
    await createTable(
        'Programa',
        `
    CREATE TABLE IF NOT EXISTS Programa (
      id_pro INTEGER PRIMARY KEY,
      nom_pro TEXT,
      descri_pro TEXT,
      costo_pro INTEGER,
      svg_icon TEXT,
	    slug TEXT,
      desc_extra TEXT
    )
    `
    )

    await createTable(
        'Requisitos',
        `
    CREATE TABLE IF NOT EXISTS Requisitos (
      id_req INTEGER PRIMARY KEY,
      id_pro INTEGER,
      nombre_req TEXT,
      desc_req TEXT,
      categoria TEXT,
      FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE SET NULL ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Objetivos',
        `
    CREATE TABLE IF NOT EXISTS Objetivos (
      id_obj INTEGER PRIMARY KEY,
      id_pro INTEGER,
	  titulo_obj TEXT,
      desc_obj TEXT,
      FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE SET NULL ON UPDATE CASCADE
    )
    `
    )

    await createTable(
        'Requisitos_cumplidos',
        `
    CREATE TABLE IF NOT EXISTS Requisitos_cumplidos (
      id_cump INTEGER PRIMARY KEY,
      id_req INTEGER,
      num_doc INTEGER,
      FOREIGN KEY (id_req) REFERENCES Requisitos(id_req) ON DELETE SET NULL ON UPDATE CASCADE,
      FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Aspirante',
        `
    CREATE TABLE IF NOT EXISTS Aspirante (
      num_doc INTEGER PRIMARY KEY,
      tipo_doc TEXT,
      nom_asp TEXT,
      apell_asp TEXT,
      sexo TEXT,
      fecha TEXT,
      periodo TEXT,
      id_pro INTEGER,
      FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE CASCADE ON UPDATE CASCADE
    )`
    )

    // ...

    await createTable(
        'Usuario',
        `
    CREATE TABLE IF NOT EXISTS Usuario (
      correo TEXT PRIMARY KEY,
      contrasena TEXT,
      num_doc INTEGER,
      FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE SET NULL ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Admin',
        `
    CREATE TABLE IF NOT EXISTS Admin (
      id_admin INTEGER PRIMARY KEY,
      contrasena TEXT
    )
  `
    )

    await createTable(
        'Telefono',
        `
    CREATE TABLE IF NOT EXISTS Telefono (
      id_tel INTEGER,
      num_doc INTEGER,
      dueno_tel TEXT,
      telefono TEXT,
      PRIMARY KEY (id_tel, num_doc),
      FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Direccion',
        `
    CREATE TABLE IF NOT EXISTS Direccion (
      id_dir INTEGER,
      num_doc INTEGER,
      direccion TEXT,
      tipo TEXT,
      dueno_dir TEXT,
      PRIMARY KEY (id_dir, num_doc),
      FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Pago',
        `
    CREATE TABLE IF NOT EXISTS pago (
      id_pago INTEGER,
      num_doc INTEGER,
      fecha TEXT,
      PRIMARY KEY (id_pago, num_doc),
      FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Area',
        `
    CREATE TABLE IF NOT EXISTS Area (
      id_area INTEGER PRIMARY KEY,
      id_pro INTEGER,
      nom_area TEXT,
      desc_area TEXT,
      FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE SET NULL ON UPDATE CASCADE
    )
  `
    )

    await createTable(
        'Asignatura',
        `
    CREATE TABLE IF NOT EXISTS Asignatura (
      id_asig INTEGER PRIMARY KEY,
      id_area INTEGER,
      nom_asig TEXT,
      desc_asig TEXT,
      periodo TEXT,
      svg_icon TEXT,
      FOREIGN KEY (id_area) REFERENCES Area(id_area) ON DELETE CASCADE ON UPDATE CASCADE
    )
  `
    )

    // Add any other table creation statements you have in a similar fashion
}

export const init = async () => {
    await dropDatabase() // Call the function to drop the database
    await createTables() // Call the function to create the tables
    await seed() // Call the seed function
}

init() // Call the init function
