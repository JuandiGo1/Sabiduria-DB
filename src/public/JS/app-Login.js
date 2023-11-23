/* eslint-disable no-undef */

async function Ingresar() {
    const user = document.getElementById('input_user').value.trim()
    const pass = document.getElementById('input_pass').value.trim()

    console.log(user)
    console.log(pass)

    try {
        const response = await fetch(login_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, pass })
        })

        const data = await response.json()

        if (data.error) {
            alert(data.error)
            return
        }

        window.location.href = '/portal.html'
        Limpiar()
    } catch (error) {
        console.error('Error:', error)
        alert(`Ocurrió un error al iniciar sesión. ${error}`)
    }
}

function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        Ingresar()
    }
}

function Limpiar() {
    document.getElementById('input_user').value = ''
    document.getElementById('input_pass').value = ''
}
