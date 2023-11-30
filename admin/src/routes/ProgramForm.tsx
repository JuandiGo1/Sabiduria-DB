import React, { useState } from 'react'
import { Programa } from '../utils/constants'
import TargetForm from './TargetForm'
import { useCreateProgram } from '../hooks/useCreateProgram'

type Event = {
    target: HTMLInputElement
    preventDefault: () => void
}

interface prop {
    programa?: Programa
}

const initialState = {
    nom_pro: '',
    id_pro: '',
    descri_pro: '',
    costo_pro: '',
    slug: '',
    desc_extra: '',
    objetivos: []
}

const AddProgramForm = ({ programa }: prop) => {
    const title = programa ? 'Editar Programa' : 'AÑADIR PROGRAMA'
    const [formValues, setFormValues] = useState(() =>
        programa ? programa : initialState
    )
    const { createObjetivo, createProgram } = useCreateProgram()

    const handleChange = (e: FormEvent<HTMLFormElement>) => {
        const { name, value } = e.target

        setFormValues((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { objetivos, ...program } = formValues

        try {
            if (!objetivos) return
            createProgram(program)
            for (const objetivo of objetivos) {
                createObjetivo(objetivo)
            }

            alert('Programa creado con éxito')
            setFormValues(initialState)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="bg-gray-800 p-10 text-white pb-6">
            <div className="flex bg-gray-800 p-10 text-white">
                <div className="flex-1 ">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-10 text-slate-400"
                    >
                        <h2 className="text-3xl mb-4 tex-white">{title}</h2>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="nom_pro"
                                value={formValues.nom_pro}
                                onChange={handleChange}
                                className="w-full p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="programId" className="block mb-2">
                                ID del Programa
                            </label>
                            <input
                                type="text"
                                id="programId"
                                name="id_pro"
                                value={formValues.id_pro}
                                onChange={handleChange}
                                className="w-full p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2">
                                Descripción
                            </label>
                            <textarea
                                id="description"
                                name="descri_pro"
                                value={formValues.descri_pro}
                                onChange={handleChange}
                                className="w-full p-2 rounded"
                                rows="2"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fee" className="block mb-2">
                                Tarifa
                            </label>
                            <input
                                type="text"
                                id="fee"
                                name="costo_pro"
                                value={formValues.costo_pro}
                                onChange={handleChange}
                                className="w-full p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="slug" className="block mb-2">
                                Slug
                            </label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value={formValues.slug}
                                onChange={handleChange}
                                className="w-full p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="extra" className="block mb-2">
                                Descripción Extra
                            </label>
                            <textarea
                                id="extra"
                                name="desc_extra"
                                value={formValues.desc_extra}
                                onChange={handleChange}
                                className="w-full p-2 rounded"
                                rows="4"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="flex-1 border-spacing-1">
                    {/* Image or graphic can be included here */}
                    <img
                        src="/logosabiduria.png"
                        alt="Mountain graphic"
                        className="w-full h-auto"
                    />
                </div>
            </div>
            <TargetForm programas={formValues} setProgramas={setFormValues} />
            <div className="w-full m-auto">
                <button
                    className="bg-teal-500 hover:bg-teal-700 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
                    onClick={handleSubmit}
                >
                    COMPLETAR CREACIÓN PROGRAMA
                </button>
            </div>
        </div>
    )
}

export default AddProgramForm
