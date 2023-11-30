import { useState, useEffect } from 'react'
import { fetchMostRepeated } from '../utils/getMostRepeated'
import { Table } from '../utils/constants'

const useMostRepeatedProgram = () => {
    const [mostRepeated, setMostRepeated] = useState<object | void>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchMostRepeatedProgram = async () => {
            try {
                setLoading(true)
                const mostRepeated = await fetchMostRepeated('Programa')
                setMostRepeated(mostRepeated)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchMostRepeatedProgram()
    }, [])

    return { mostRepeated, loading, error }
}

export { useMostRepeatedProgram }
