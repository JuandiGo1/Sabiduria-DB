renderprograma()

/** {
    "id_pro": 1,
    "nom_pro": "Computer Science",
    "descri_pro": "Study of computer systems and software development",
    "obj_pro": "To prepare students for careers in technology and software engineering",
    "costo_pro": 10000,
    "svg_icon": "laptop-code",
    "slug": "computerscience"
} */

function getSlug() {
    //   get the slug from the hash
    const slug = window.location.hash.slice(1)
    return slug
}

async function getPrograma(slug) {
    const res = await fetch(`${programs_url}/slug/${slug}`)
    const programa = await res.json()

    return programa.data
}

async function renderprograma() {
    const slug = getSlug()
    const programa = await getPrograma(slug)
    console.log(programa)

    renderEntry(programa, document.getElementById('entry'))
    renderInfoGeneral(programa, document.getElementById('info-general'))
    // renderTargets(programa.targets, document.getElementById('targets_items'))
    renderAreas(programa.areas, document.getElementById('areas_items'))
}

/** <div class="areas_item">
                        <p>
                            <span>BÁSICA.</span> Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Sit
                            amet tellus cras adipiscing enim. Ut porttitor leo a
                            diam sollicitudin. Turpis in eu mi bibendum neque
                            egestas congue quisque egestas.
                        </p>
                    </div> */
function renderAreas(areas, container) {
    function renderArea(area, container) {
        const areas_item = document.createElement('div')
        areas_item.className = 'areas_item'
        const p = document.createElement('p')
        const span = document.createElement('span')
        span.textContent = area.nom_area
        p.textContent = area.desc_area

        p.prepend(span)
        areas_item.appendChild(p)
        container.appendChild(areas_item)
    }

    container.innerHTML = ''
    areas.forEach((area) => {
        renderArea(area, container)
    })
}

function renderEntry({ nom_pro, descri_pro, slug }, container) {
    // console.log(nom_pro, descri_pro, slug)
    const titulo = document.createElement('h1')
    titulo.id = 'titulo'
    const descripcion = document.createElement('p')
    descripcion.id = 'descripcion'
    const rdm = document.createElement('a')
    rdm.id = 'rdm'
    rdm.className = 'u-btn'
    titulo.textContent = nom_pro
    descripcion.textContent = descri_pro
    rdm.textContent = 'Registrarme'

    rdm.setAttribute('href', `registro.html#${slug}`)
    container.innerHTML = ''
    container.appendChild(titulo)
    container.appendChild(descripcion)
    container.appendChild(rdm)
}

function renderInfoGeneral({ descri_pro, obj_pro }, container) {
    const descripcion = document.createElement('p')
    const objetivo = document.createElement('p')

    descripcion.textContent = descri_pro
    objetivo.textContent = obj_pro

    container.innerHTML = ''
    container.appendChild(descripcion)
    container.appendChild(objetivo)
}

function renderTargets(targets, container) {
    /** <div class="target_item">
                        <span class="icon">
                            <img src="images/bombilla.png" alt="" />
                        </span>
                        <div class="content">
                            <h2>Sample Headline</h2>
                            <p>
                                Sample text. Click to select the text box. Click
                                again or double click to start editing the text.
                            </p>
                        </div>
                    </div> */
    function renderTarget(target, container) {
        const target_item = document.createElement('div')
        target_item.className = 'target_item'
        const icon = document.createElement('span')
        icon.className = 'icon'
        const img = document.createElement('img')
        img.src = 'images/bombilla.png'
        img.alt = ''
        const content = document.createElement('div')
        content.className = 'content'
        const titulo = document.createElement('h2')
        titulo.textContent = target.nom_tar
        const descripcion = document.createElement('p')
        descripcion.textContent = target.descri_tar

        icon.appendChild(img)
        content.appendChild(titulo)
        content.appendChild(descripcion)
        target_item.appendChild(icon)
        target_item.appendChild(content)
        container.appendChild(target_item)
    }

    container.innerHTML = ''
    targets.forEach((target) => {
        renderTarget(target, container)
    })
}
