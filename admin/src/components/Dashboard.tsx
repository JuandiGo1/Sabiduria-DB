import {
    useUserCount,
    useAspiranteCount,
    useProgramaCount
} from '../hooks/useCount'
import { useMostRepeatedProgram } from '../hooks/useMostRepeated'

const DashboardSummary = () => {
    const { userCount } = useUserCount()
    const { aspiranteCount } = useAspiranteCount()
    const { programaCount } = useProgramaCount()
    const { mostRepeatedProgram } = useMostRepeatedProgram()
    console.log(mostRepeatedProgram)
    return (
        <div className="bg-gray-800 text-white p-4">
            <h1 className="text-xl font-bold mb-4">RESUMEN</h1>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <StatCard
                    title="REGISTRADOS"
                    value={userCount}
                    iconClass="fas fa-user-check"
                />

                <StatCard
                    title="INSCRITOS"
                    value={aspiranteCount}
                    iconClass="fas fa-fingerprint"
                />
                <StatCard
                    title="PROGRAMAS"
                    value={programaCount}
                    iconClass="fas fa-server"
                />
                <CardsContainer />
            </div>
            <div className="rounded-lg p-4 flex items-center justify-between bg-white text-black">
                <span>CARTERA</span>
                <span className="text-green-600 text-4xl">$1205590</span>
                {/* Replace with FontAwesome icon */}
                <i className="fas fa-badge-check text-gray-800"></i>
            </div>
        </div>
    )
}

const StatCard = ({ title, value, iconClass }) => {
    return (
        <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center justify-center">
            <span className="text-gray-800">{title}</span>
            <span className="text-3xl">{value}</span>
            <i className={`${iconClass} text-gray-800`}></i>
        </div>
    )
}

const InfoCard = ({ title, subTitle, data }) => {
    return (
        <div className="bg-white text-black rounded-lg p-4 flex flex-col items-center justify-center shadow-lg">
            <h4 className="text-gray-800 font-semibold">{title}</h4>
            <h3 className="text-2xl font-bold">{subTitle}</h3>
            <p className="text-gray-800">Inscritos: {data}</p>
            {/* Replace with actual icon path or component */}
            <img src="/path-to-your-icon.svg" alt="Icon" className="h-6 w-6" />
        </div>
    )
}

const CardsContainer = () => {
    return (
        <>
            <InfoCard
                title="PROGRAMA MÁS OFERTADO 202330"
                subTitle="Sistemas"
                data="100"
            />
            <InfoCard
                title="ASPIRANTES 202330"
                subTitle="Sistemas"
                data="112"
            />
            <InfoCard
                title="PROGRAMA MÁS OFERTADO 202330"
                subTitle="Sistemas"
                data="100"
            />
        </>
    )
}
export default DashboardSummary
