import express, { json } from 'express'
const sqlite3 = require('sqlite3').verbose()
import morgan from 'morgan'

const app = express()
const port = 3000

// Configuración para recibir datos en formato JSON
app.use(json())
// Configuracion de morgan
app.use(morgan('dev'))

// Conexión a la base de datos
let db = new sqlite3.Database('./sabiduria.db')

db.run(`CREATE TABLE IF NOT EXISTS Requisitos (
    id_req INTEGER PRIMARY KEY,
    doc_identidad INTEGER,
    notas INTEGER,
    ensayo INTEGER,
    icfes INTEGER
)`);

db.run(`CREATE TABLE IF NOT EXISTS Programa (
    id_pro INTEGER PRIMARY KEY,
    nom_pro TEXT,
    descri_pro TEXT,
    obj_pro TEXT,
    costo_pro INTEGER,
    id_req INTEGER,
    FOREIGN KEY (id_req) REFERENCES Requisitos(id_req) ON DELETE SET NULL ON UPDATE CASCADE
)`);

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
)`);

db.run(`CREATE TABLE IF NOT EXISTS Usuario (
    correo TEXT PRIMARY KEY,
    contrasena TEXT,
    num_doc INTEGER,
    FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE SET NULL ON UPDATE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS Admin (
    id_admin INTEGER PRIMARY KEY,
    contrasena TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS Telefono (
    id_tel INTEGER,
    num_doc INTEGER,
    dueno_tel TEXT,
    telefono TEXT,
    PRIMARY KEY (id_tel, num_doc),
    FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS Direccion (
    id_dir INTEGER,
    num_doc INTEGER,
    direccion TEXT,
    tipo TEXT,
    PRIMARY KEY (id_dir, num_doc),
    FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS pago (
    id_pago INTEGER,
    num_doc INTEGER,
    fecha TEXT,
    PRIMARY KEY (id_pago, num_doc),
    FOREIGN KEY (num_doc) REFERENCES Aspirante(num_doc) ON DELETE CASCADE ON UPDATE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS Area (
    id_area INTEGER PRIMARY KEY,
    id_pro INTEGER,
    nom_area TEXT,
    FOREIGN KEY (id_pro) REFERENCES Programa(id_pro) ON DELETE SET NULL ON UPDATE CASCADE
)`);

db.run(`CREATE TABLE IF NOT EXISTS Asignatura (
    id_asig INTEGER PRIMARY KEY,
    id_area INTEGER,
    nom_asig TEXT,
    FOREIGN KEY (id_area) REFERENCES Area(id_area) ON DELETE CASCADE ON UPDATE CASCADE
)`);


