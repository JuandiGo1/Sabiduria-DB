import { useState, useEffect } from 'react'
import { fetchPrograms } from '../utils/GetPrograms'
import { Programa } from '../utils/constants'

const useGetPrograms = () => {
    const [loading, setLoading] = useState<Array<Programa>>(false)
    const [error, setError] = useState<unknown>(null)
    const [programs, setPrograms] = useState([])
    const [cols, setCols] = useState([])

    const getPrograms = async () => {
        try {
            setLoading(true)
            const data = await fetchPrograms()
            setPrograms(data)
            setCols(Object.keys(data[0]))
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPrograms()
    }, [])

    return { programs, loading, error, cols }
}

export { useGetPrograms }
