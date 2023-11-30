import { useState, useEffect } from 'react'
import { fetchTableCount } from '../utils/getTableCount'

const useUserCount = () => {
    const [userCount, setUserCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                setLoading(true)
                const count = await fetchTableCount('Usuario')
                setUserCount(count)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchUserCount()
    }, [])

    return { userCount, loading, error }
}

const useAspiranteCount = () => {
    const [aspiranteCount, setAspiranteCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchAspiranteCount = async () => {
            try {
                setLoading(true)
                const count = await fetchTableCount('Aspirante')
                setAspiranteCount(count)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchAspiranteCount()
    }, [])

    return { aspiranteCount, loading, error }
}

const useProgramaCount = () => {
    const [programaCount, setProgramaCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<unknown>(null)

    useEffect(() => {
        const fetchProgramaCount = async () => {
            try {
                setLoading(true)
                const count = await fetchTableCount('Programa')
                setProgramaCount(count)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchProgramaCount()
    }, [])

    return { programaCount, loading, error }
}

export { useUserCount, useAspiranteCount, useProgramaCount }
