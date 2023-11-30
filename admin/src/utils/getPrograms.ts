import { BACKEND_URL } from './constants'

export async function fetchPrograms() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/programa`)

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

export async function fetchObjetivos(id_pro) {
    try {
        const response = await fetch(
            `${BACKEND_URL}/api/programa/objetivo/${id_pro}`
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
