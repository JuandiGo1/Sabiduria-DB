import { SetStateAction, useState } from 'react'
import { Objetivo, Programa } from '../utils/constants'

const initialState = {
    id_obj: '',
    titulo_obj: '',
    desc_obj: '',
    id_pro: ''
}

interface props {
    target?: Objetivo
    programas: Programa
    setProgramas: SetStateAction<Programa>
}

const TargetForm = ({ target, programas, setProgramas }: props) => {
    const [formValues, setFormValues] = useState(() =>
        target ? target : initialState
    )

    const { objetivos } = programas

    const handleDelete = (id_obj) => {
        const newObjectives = objetivos.filter(
            (objetivo) => objetivo.id_obj !== id_obj
        )
        setProgramas({
            ...programas,
            objetivos: newObjectives
        })
    }

    // console.log(programas)
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(formValues)

        setFormValues((prevState) => ({
            ...prevState,
            id_pro: programas.id_pro,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formValues)
        // valida que todos los campos esten llenos
        if (Object.values(formValues).includes('')) {
            alert('Por favor llene todos los campos')
            return
        }

        setProgramas({
            ...programas,
            objetivos: [...programas.objetivos, formValues]
        })
    }

    return (
        <div className="container mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold mb-8">CREAR OBJETIVOS</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {objetivos?.length > 0 ? (
                    <Targets
                        objetivos={objetivos}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <p className="text-yellow-50">No hay objetivos</p>
                )}
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit}>
                        <label className="block text-yellow-50 text-sm font-bold mb-2">
                            Título
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="titulo_obj"
                                value={formValues.titulo_obj}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="block text-yellow-50 text-sm font-bold mb-2">
                            ID del Objetivo
                            <input
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="id_obj"
                                value={formValues.id_obj}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="block text-yellow-50 text-sm font-bold mb-2">
                            Descripción
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="desc_obj"
                                value={formValues.desc_obj}
                                onChange={handleChange}
                            />
                        </label>
                        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            AÑADIR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Targets({ objetivos, handleDelete }) {
    return (
        <div>
            <div className="bg-teal-300 p-4 mt-4 rounded-t">
                <h2 className="font-bold">Objetivos</h2>
            </div>
            <ul className="bg-gray-100">
                {/* Repeat this list item for each row */}
                <li className="flex justify-between items-center p-4 border-b border-gray-300">
                    <span className="text-slate-900">Row 1</span>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                        BORRAR
                    </button>
                </li>
                {objetivos.map((objetivo) => {
                    return (
                        <li
                            className="flex justify-between items-center p-4 border-b border-gray-300"
                            key={objetivo.id_obj}
                        >
                            <span className="text-slate-900">
                                {objetivo.titulo_obj}
                                <br />
                                <span className="text-xs">
                                    {objetivo.desc_obj}
                                </span>
                            </span>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => handleDelete(objetivo.id_obj)}
                            >
                                BORRAR
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TargetForm
