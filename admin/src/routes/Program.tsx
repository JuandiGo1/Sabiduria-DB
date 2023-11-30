import React, { useState } from 'react'
import { useGetPrograms } from '../hooks/useGetPrograms'
import AddProgramForm from './ProgramForm'

function Program() {
    const { programs, cols } = useGetPrograms()
    const [togle, setToggle] = useState(false)
    const [selected, setSelected] = useState(undefined)

    return (
        <>
            <h1 onClick={() => setToggle(false)}>Programas</h1>
            {togle ? (
                <AddProgramForm programa={selected} />
            ) : (
                <button onClick={() => setToggle(true)}>
                    Agregar Programa
                </button>
            )}

            <table>
                <thead>
                    <tr>
                        {cols.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {programs.map((program, index) => (
                        <tr key={index}>
                            <td>{program[cols[0]]}</td>
                            <td
                                onClick={() => {
                                    setSelected(program)
                                    setToggle(true)
                                }}
                            >
                                {program[cols[1]]}
                            </td>
                            <td>{program[cols[2]]}</td>
                            <td>{program[cols[3]]}</td>
                            <td>{program[cols[4]]}</td>
                            <td>{program[cols[5]]}</td>
                            <td>{program[cols[6]]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Program
