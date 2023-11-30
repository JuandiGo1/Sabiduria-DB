const colors = {
    pending: 'bg-black rounded-full p-2',
    current: 'bg-gradient-to-r from-red-500 to-yellow-500 rounded-full p-2',
    done: 'bg-teal-400 rounded-full p-2'
}

interface StepbarProps {
    currentStep: number
}

function getStepStatus(currentStep: number, step: number) {
    if (currentStep === step) {
        return 'current'
    } else if (currentStep > step) {
        return 'done'
    } else {
        return 'pending'
    }
}

function Stepbar({ currentStep }: StepbarProps) {
    const one = getStepStatus(currentStep, 1)
    const two = getStepStatus(currentStep, 2)
    const three = getStepStatus(currentStep, 3)
    return (
        <div className="flex justify-between items-center bg-gray-800 py-2 px-4">
            {/* El primer ícono con un fondo turquesa */}
            <div className={colors[one]}>
                <img src="/149892.png" alt="Step 1" className="h-12" />
            </div>
            {/* El texto indicando el paso actual */}
            {/* El segundo ícono con un fondo de degradado */}
            <div className={colors[two]}>
                <img src="/12.svg" alt="Step 2" className="h-12 w-12" />
            </div>
            {/* El tercer ícono con un fondo negro */}
            <div className={colors[three]}>
                <img src="/14.svg" alt="Contact" className="h-12 w-12" />
            </div>
        </div>
    )
}

export default Stepbar
