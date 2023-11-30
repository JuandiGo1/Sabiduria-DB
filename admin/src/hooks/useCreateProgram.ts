import { fetchInsertObjetivo, fetchInsertProgram } from '../utils/CreateProgram'
import { useState, useEffect } from 'react'
import { Objetivo, Programa } from '../utils/constants'

const useCreateProgram = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<unknown>(null)

    const createProgram = async (program: Programa) => {
        try {
            setLoading(true)
            const data = await fetchInsertProgram(program)
            return data
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const createObjetivo = async (objetivo: Objetivo) => {
        try {
            setLoading(true)
            const data = await fetchInsertObjetivo(objetivo)
            return data
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { createProgram, createObjetivo, loading, error }
}

export { useCreateProgram }
