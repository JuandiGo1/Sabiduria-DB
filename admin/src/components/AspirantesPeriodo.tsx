import React, { useState } from 'react'
import { useEffect } from 'react'
import { BACKEND_URL } from '../utils/constants'

function AspirantesPeriodo() {
    const [aspirantes, setAspirantes] = useState([])
    const [periodos, setPeriodos] = useState([])
    // fetch a aspirante/periodo

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/aspirante/periodo`)
            .then((response) => response.json())
            .then((data) => {
                if (!data) return
                setAspirantes(data.data)
                setPeriodos(data.data.keys)
            })
    }, [aspirantes, setAspirantes])

    return <div></div>
}

export default AspirantesPeriodo
