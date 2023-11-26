async function Ingresar() {
    const user = document.getElementById('input_us').value
    const pass = document.getElementById('input_cn').value
    const pass2 = document.getElementById('input_cn2').value

    if (user === '' || pass === '' || pass2 === '') {
        return alert('Debe completar todos los campos')
    }

    if (pass !== pass2) {
        return alert('Las contraseñas no coinciden')
    }

    const newUser = {
        user,
        pass
    }

    const res = await fetch(register_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })

    const data = await res.json()

    if (data.error) {
        return alert(data.error)
    }

    alert(data.message)
    window.location.href = '/login.html'
}

// const button = document.getElementById('bt_form')
// button.addEventListener('click', Ingresar)
