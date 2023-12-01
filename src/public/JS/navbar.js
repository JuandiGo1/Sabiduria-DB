/* eslint-disable no-tabs */

const isLogged = document.cookie.includes('session')

// Ruta activa
const path = window.location.pathname
const pathArray = path.split('/')
const active = pathArray[1].toLowerCase().replace('.html', '') // Convertir a minúsculas para comparación insensible a mayúsculas y minúsculas

const logo = `
<div class="logo logo__cabecera">
	<img src="images/logo_sabiduria.png" alt="Logo" />
	<a href="/">
		<h1>Sabiduría</h1>
	</a>
</div>`

const notLogged = `
${logo}
<div id="menu">
	<a class="opc_menu ${
        active === 'portal' || active === '' ? 'active' : ''
    }" href="portal.html">Programas</a>
	<a class="opc_menu ${
        active === 'login' ? 'active' : ''
    }" href="Login.html">Acceder</a>
	<a class="opc_menu ${
        active === 'register' ? 'active' : ''
    }" href="Register.html">Registrarse</a>
</div>
`
console.log(active)
const logged = `
${logo}
<div id="menu">
	<a class="opc_menu ${
        active === 'inscripcion' || active === 'Inscripcion' ? 'active' : ''
    } "href="Inscripcion.html">Inscripcion</a>
	<a class="opc_menu ${
        active === 'portal' ? 'active' : ''
    }" href="portal.html">Programas</a>
	<a class="opc_menu" id="logoutb">Cerrar sesión</a>
</div>
`

document.querySelector('#cabecera').innerHTML = isLogged ? logged : notLogged

document.querySelector('#logoutb')?.addEventListener('click', logOut)

function logOut() {
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    window.location.href = '/'
}
