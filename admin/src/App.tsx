import './App.css'
import Navbar from './components/Navbar'
import RegistrationForm from './components/Form'
import DashboardSummary from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AddProgramForm from './routes/ProgramForm'
import ErrorPage from './routes/error-page'
import Program from './routes/Program'

// This code renders the main application component, which includes
// the navigation bar and the main application content. The main
// content is rendered using React Router, which matches the current
// URL to a route and renders the corresponding component.

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<DashboardSummary />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/programs" element={<Program />} />
                <Route path="/programs/add" element={<AddProgramForm />} />

                <Route path="/programs/edit" element={<AddProgramForm />} />

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App
