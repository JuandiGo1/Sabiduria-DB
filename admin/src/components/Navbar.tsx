import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-teal-500">
            <div className="max-w-6xl mx-auto px-4 flex justify-between space-x-4">
                {/* logo */}
                <div>
                    <a
                        href="#"
                        className="flex items-center py-5 px-2 text-white"
                    >
                        {/* Replace with your actual logo image */}
                        <img
                            src="/logosabiduria.png"
                            alt="Logo"
                            className="h-14 w-14 mr-2"
                        />
                        <span className="font-bold">
                            Institución Educativa Sabiduría
                        </span>
                    </a>
                </div>

                {/* primary nav */}
                <div className="hidden md:flex items-end space-x-1 p-5">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            'p' + isPending
                                ? 'pending y-5 px-3 text-white'
                                : isActive
                                ? 'active y-5 px-3 text-white'
                                : ''
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/programs"
                        className={({ isActive, isPending }) =>
                            'p' + isPending
                                ? 'pending y-5 px-3 text-white'
                                : isActive
                                ? 'active y-5 px-3 text-white'
                                : ''
                        }
                    >
                        Programas
                    </NavLink>
                    <NavLink
                        to="/programs/edit"
                        className={({ isActive, isPending }) =>
                            'p' + isPending
                                ? 'pending y-5 px-3 text-white'
                                : isActive
                                ? 'active y-5 px-3 text-white'
                                : ''
                        }
                    >
                        Editars
                    </NavLink>
                    <NavLink
                        to="/records"
                        className={({ isActive, isPending }) =>
                            'p' + isPending
                                ? 'pending y-5 px-3 text-white'
                                : isActive
                                ? 'active y-5 px-3 text-white'
                                : ''
                        }
                    >
                        Registros
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive, isPending }) =>
                            'p' + isPending
                                ? 'pending y-5 px-3 text-white'
                                : isActive
                                ? 'active y-5 px-3 text-white'
                                : ''
                        }
                    >
                        Blog
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
