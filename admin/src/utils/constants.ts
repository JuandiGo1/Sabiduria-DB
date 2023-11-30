export const BACKEND_URL = 'http://localhost:3000'
export type Table = 'Aspirante' | 'Programa' | 'Usuario'

export interface Programa {
    id_pro: string
    nom_pro: string
    descri_pro: string
    costo_pro: string
    svg_icon?: string
    slug: string
    desc_extra: string
    areas?: Area[]
    objetivos?: Objetivo[]
    asignaturas?: Array<Array<AsignaturaClass[] | string>>
}

export interface Area {
    id_area: number
    id_pro: number
    nom_area: string
    desc_area: string
}

export interface AsignaturaClass {
    id_asig: number
    id_area: number
    nom_asig: string
    desc_asig: string
    categoria: string
    svg_icon: null
}

export interface Objetivo {
    id_obj: number
    id_pro: number
    titulo_obj: string
    desc_obj: string
}
