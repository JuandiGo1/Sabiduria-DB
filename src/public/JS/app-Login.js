function Ingresar() {
    const user = document.getElementById('input_user').value
    const pass = document.getElementById('input_pass').value

    console.log(user)
    console.log(pass)
    fetch('auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user, pass })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error)
                return
            }
            alert(data.message)
            Limpiar()
        })
        .catch((error) => {
            console.error('Error:', error)
            alert(`Ocurrió un error al iniciar sesion 1. ${error}`)
        })
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
