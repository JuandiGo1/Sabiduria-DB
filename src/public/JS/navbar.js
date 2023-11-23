/* eslint-disable no-tabs */

const isLogged = document.cookie.includes('session')

const notLogged = `
<div class="logo logo__cabecera">Logo</div>
<div id="menu">
        <a class="opc_menu" href="portal.html">Programas</a>
    <a class="opc_menu" href="Login.html">Acceder</a>
    <a class="opc_menu" href="Register.html">Registrarse</a>
 </div>
`

const logged = `
<div class="logo logo__cabecera">Logo</div>
<div id="menu">
	<a class="opc_menu" href="portal.html">Programas</a>
	<a class="opc_menu" href="perfil.html">Perfil</a>
	<a class="opc_menu" id="logoutb">Cerrar sesión</a>
</div>
`

document.querySelector('#cabecera').innerHTML = isLogged ? logged : notLogged

document.querySelector('#logoutb')?.addEventListener('click', logOut)

function logOut() {
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    window.location.href = '/'
}
