import { BACKEND_URL, Table } from './constants'

// This function fetches the count of the specified table
export async function fetchMostRepeated(table: Table) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/${table}/most-common`)

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
