import sqlite3
import pandas as pd

# Conectarse a la base de datos SQLite
conexion = sqlite3.connect('sabiduria.db')

# Obtener una lista de todas las tablas en la base de datos
tablas = pd.read_sql_query("SELECT name FROM sqlite_master WHERE type='table'", conexion)

# Crear un objeto ExcelWriter para escribir en un solo archivo de Excel
with pd.ExcelWriter('sabiduria.xlsx', engine='xlsxwriter') as escritor:

    # Iterar sobre cada tabla y escribir en una hoja diferente
    for index, tabla in tablas.iterrows():
        nombre_tabla = tabla['name']
        datos_tabla = pd.read_sql_query(f"SELECT * FROM {nombre_tabla}", conexion)
        print(f"Exportando tabla {nombre_tabla} a Excel")
        datos_tabla.to_excel(escritor, sheet_name=nombre_tabla, index=False)

conexion.close()  # Cerrar la conexión a la base de datos SQLite
