var data_user = null

async function reLoggin() {
    const response = await fetch('/api/auth/login/renew', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if (data.error) {
        alert(data.error)
        return
    }
}

async function main() {
    await reLoggin()
    try {
        const response = await fetch('/api/usuario/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const data = await response.json()

        if (data.error) {
            alert(data.error)
            return
        }

        data_user = data.data.user

        const step = data_user.paso
    
        const etq_step = document.getElementById('sp_step')
        etq_step.innerText = step
        const sec1 = document.getElementById('sec_step1')
        const sec2 = document.getElementById('sec_step2')
        const sec3 = document.getElementById('sec_step3')
        const figure1 = document.getElementById('figure_step1')
        const figure2 = document.getElementById('figure_step2')
        const figure3 = document.getElementById('figure_step3')
    
        switch (step) {
            case 1:
                sec1.style.display = 'flex'
                figure1.style.background = 'linear-gradient(black, #db545a)'
                break
            case 2:
                figure1.style.backgroundColor = '#2cccc4'
                figure2.style.background = 'linear-gradient(black, #db545a)'
                sec2.style.display = 'block'

                const response = await fetch(programs_url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
        
                const data = await response.json()
        
                if (data.error) {
                    alert(data.error)
                    return
                }

                const programs = data.data

                const slc = document.getElementById('slc_programa')
                for (const program of programs) {
                    slc.innerHTML += `<option value="${program.nom_pro}">${program.nom_pro}</option>`
                }
                break
            case 3:
                figure1.style.backgroundColor = '#2cccc4'
                figure2.style.backgroundColor = '#2cccc4'
                figure3.style.background = 'linear-gradient(black, #db545a)'
                sec3.style.display = 'block'

                let idp = null

                fetch(`/api/aspirante/${data_user.num_doc}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        idp = data.data[0].id_pro

                        let precio = null
                        fetch(`/api/programa/${idp}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                precio = data.data[0].costo_pro
                                nom = data.data[0].nom_pro

                                document.getElementById('etq_programa').innerText = nom
                                document.getElementById('sp_precio').innerText = precio
                            })
                            .catch((error) => {
                                alert('Error:', error)
                            })
                    })
                    .catch((error) => {
                        alert('Error:', error)
                    })
                
                break
            default:
                alert('Error paso no valido.')
                break
        }
    } catch (error) {
        console.error('Error:', error)
        alert(`Ocurrió un error al cargar el paso. ${error}`)
        return
    }
}

async function registrar() {
    const tipo_documento = document.getElementById('slc_documento').value
    const documento = document.getElementById('input_documento').value
    const nombre = document.getElementById('input_nombre').value
    const apellido = document.getElementById('input_apellido').value
    const sexo = document.getElementById('slc_sexo').value
    const fecha = document.getElementById('input_fecha').value
    const periodo = document.getElementById('input_periodo').value
    const programa = document.getElementById('slc_programa').value

    const dt = {
        num_doc: documento,
        tipo_doc: tipo_documento,
        nom_asp: nombre,
        apell_asp: apellido,
        sexo: sexo,
        fecha: fecha,
        periodo: periodo,
        id_pro: null
    }

    const response = await fetch('/api/aspirante/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            correo: data_user.correo,
            aspirante: dt
        })
    })

    const data = await response.json()

    if (data.error) {
        console.error('Error:', data.error)
        alert(`Ocurrió un error al intentar registrar el aspirante. ${data.error}`)
        return
    } else {    
        alert(`	${data.message}`)
        actualizarPaso()
    }
}

async function cargarArchivo(id) {
    const sp = document.getElementById(id)
    sp.innerHTML += '<img src="Images/check.png" style="z-index: 10;">'
}

async function actualizarPrograma() {
    const nom_prom = document.getElementById('slc_programa').value
    
    const response = await fetch(programs_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if (data.error) {
        alert(data.error)
        return
    }

    const programs = data.data

    let id_pro = null
    for (const program of programs) {
        if (nom_prom == program.nom_pro) {
            id_pro = program.id_pro
            break
        }
    }

    fetch('/api/aspirante/updateProgram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num_Doc: data_user.num_doc,
            id_pro: id_pro
        })
    })
        .then((response) => response.json())
        .then((data) => {
            actualizarPaso()
        })
        .catch((error) => {
            alert('Error al actualizar el programa', data.error)
        })
}

async function actualizarPaso() {
    const response = await fetch('/api/aspirante/updateStep', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            correo: data_user.correo,
            paso: data_user.paso+1
        })
    })

    const data = await response.json()

    if (data.error) {
        console.error('Error:', data.error)
        alert(`Ocurrió un error al intentar actualizar el paso. ${data.error}`)
        return
    } else {
        location.reload()
    }
}

main()