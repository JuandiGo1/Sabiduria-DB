<div align="center">
  <h1>
    Sabiduría Digital - Educational Information System
  </h1>

<img src="src/public/Images/logo_sabiduria.png" alt="Logo de Sabiduría" width="250"/>

<h4>
    Transforming Aspirant Acquisition Through Innovative Technology
  </h4>

[![GitHub lellerena](https://img.shields.io/badge/by-lellerena-red)](https://github.com/lellerena)
[![GitHub JuandiGo1](https://img.shields.io/badge/by-JuandiGo1-green)](https://github.com/JuandiGo1)
[![GitHub Almor21](https://img.shields.io/badge/by-Almor21-orange)](https://github.com/Almor21)
[![GitHub Slrosales](https://img.shields.io/badge/by-Slrosales-purple)](https://github.com/Slrosales)
[![GitHub jfbenitezz](https://img.shields.io/badge/by-jfbenitezz-blue)](https://github.com/jfbenitezz)

</div>

## Introduction

The Sabiduría Digital project transforms the applicant acquisition process through innovative technology. This system integrates web development with database management to optimize administrative workflows, enhance user experience, and support decision-making processes.

## Features

-   Intuitive and interactive user interface for both applicants and administrative staff.
-   Automated applicant acquisition process.
-   Data-driven insights for informed decision-making.
-   Progressive web application with JavaScript and SQLite for robustness and efficiency.

## System Requirements

-   Node.js (version 14 or higher)
-   Modern web browser (e.g., Chrome, Firefox, Safari)
-   SQLite3

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/JuandiGo1/Sabiduria-DB.git

    ```

2. Navigate to the project directory:

    ```bash
    cd Sabiduria-DB

    ```

3. Install dependencies:

    ```bash
    npm install

    ```

4. Initialize the database:

    ```bash
    node seed.js
    ```

## Admin dashboard use

```bash
npm run start:admin
```

## Usage

To start the server, run the following command:

```bash
npm start
```

Access the application by navigating to `http://localhost:3000` in your web browser.

## Database Schema

The system utilizes a relational database with the following tables:

-   **Programa**: Contains details about educational programs offered.
-   **Requisitos**: Lists the requirements for each program.
-   **Objetivos**: Holds objectives for each program.
-   **Requisitos_cumplidos**: Tracks which requirements have been fulfilled by applicants.
-   **Aspirante**: Stores information about applicants.
-   **Usuario**: Manages user authentication.
-   **Admin**: Admin credentials and management.
-   **Telefono**: Contact information for applicants.
-   **Direccion**: Address information for applicants.
-   **Pago**: Payment transactions related to applicants.
-   **Area**: Defines study areas within programs.
-   **Asignatura**: Describes subjects taught within each area.

For more details on the database schema, please refer to the `schema.sql` file.

### Entity–Relationship Model

<img src="Modelo de Entidad relacion.png">

### Relational Model

<img src="Modelo Relacional.jpeg">

## Team

-   Felipe Benítez (Model Lead)
-   Laura Gómez
-   Luis Llerena (Backend Lead)
-   Juan Maestre
-   Edinson Noriega (Frontend Lead)

# Sabiduria-DB
![Sabiduria](https://github.com/user-attachments/assets/5ee3d7f6-ea71-4b76-82e0-01752dd321e2)

![Visualization of the codebase](./diagram.svg)
