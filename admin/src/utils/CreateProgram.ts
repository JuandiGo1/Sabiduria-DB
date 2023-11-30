import { BACKEND_URL, Objetivo, Programa } from './constants'

export async function fetchInsertProgram(program: Programa) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/programa/insert`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(program)
        })

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data.data
    } catch (error) {
        console.error('Error fetching aspirante count:', error)
        // You might want to handle the error further or re-throw it
        throw error
    }
}

export async function fetchInsertObjetivo(objetivo: Objetivo) {
    try {
        const response = await fetch(
            `${BACKEND_URL}/api/programa/objetivo/insert`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetivo)
            }
        )

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data.data
    } catch (error) {
        console.error('Error fetching aspirante count:', error)
        // You might want to handle the error further or re-throw it
        throw error
    }
}
