import db from '../index.js'

try {
    db.run(`CREATE TABLE IF NOT EXISTS Requisitos (
        id_req INTEGER PRIMARY KEY,
        doc_identidad INTEGER,
        notas INTEGER,
        ensayo INTEGER,
        icfes INTEGER
    )`)
    console.log(
        'Llamado a la creación de la tabla Requisitos realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Requisitos:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Programa (
        id_pro INTEGER PRIMARY KEY,
        nom_pro TEXT,
        descri_pro TEXT,
        obj_pro TEXT,
        costo_pro INTEGER,
        id_req INTEGER,
        FOREIGN KEY (id_req) REFERENCES Requisitos(id_req) ON DELETE SET NULL ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Programa realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Programa:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Aspirante (
        num_doc INTEGER PRIMARY KEY,
        tipo_doc TEXT,
        nom_asp TEXT,
        apell_asp TEXT,
        sexo TEXT,
        fecha TEXT,
        periodo TEXT,
        id_pro INTEGER,
        FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE CASCADE ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Aspirante realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Aspirante:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Usuario (
        correo TEXT PRIMARY KEY,
        contrasena TEXT,
        num_doc INTEGER,
        FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE SET NULL ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Usuario realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Usuario:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Admin (
        id_admin INTEGER PRIMARY KEY,
        contrasena TEXT
    )`)
    console.log(
        'Llamado a la creación de la tabla Admin realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Admin:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Telefono (
        id_tel INTEGER,
        num_doc INTEGER,
        dueno_tel TEXT,
        telefono TEXT,
        PRIMARY KEY (id_tel, num_doc),
        FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Telefono realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Telefono:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Direccion (
        id_dir INTEGER,
        num_doc INTEGER,
        direccion TEXT,
        tipo TEXT,
        PRIMARY KEY (id_dir, num_doc),
        FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Direccion realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Direccion:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS pago (
        id_pago INTEGER,
        num_doc INTEGER,
        fecha TEXT,
        PRIMARY KEY (id_pago, num_doc),
        FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Pago realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Pago:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Area (
        id_area INTEGER PRIMARY KEY,
        id_pro INTEGER,
        nom_area TEXT,
        FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE SET NULL ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Area realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Area:', error)
}

try {
    db.run(`CREATE TABLE IF NOT EXISTS Asignatura (
        id_asig INTEGER PRIMARY KEY,
        id_area INTEGER,
        nom_asig TEXT,
        FOREIGN KEY (id_area) REFERENCES Area(id_area) ON DELETE CASCADE ON UPDATE CASCADE
    )`)
    console.log(
        'Llamado a la creación de la tabla Asignatura realizado correctamente'
    )
} catch (error) {
    console.error('Error al crear la tabla Asignatura:', error)
}
