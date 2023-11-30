import Stepbar from './Stepbar'

const RegistrationForm = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6">
            <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-md p-8">
                <Stepbar currentStep={2} />
                <div className="text-center my-6">
                    <div className="text-lg text-white mb-2">Paso 2 de 3</div>
                    <h1 className="text-3xl text-white font-bold mb-4">
                        Queremos conocerte
                    </h1>
                    s
                </div>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-input w-full px-4 py-3 rounded-md bg-gray-700 text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="form-input w-full px-4 py-3 rounded-md bg-gray-700 text-white"
                    />
                    <input
                        type="tel"
                        placeholder="Ingrese su teléfono"
                        className="form-input w-full px-4 py-3 rounded-md bg-gray-700 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Edad"
                        className="form-input w-full px-4 py-3 rounded-md bg-gray-700 text-white"
                    />
                    <textarea
                        placeholder="Address"
                        className="form-textarea w-full px-4 py-3 rounded-md bg-gray-700 text-white"
                        rows="3"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm
