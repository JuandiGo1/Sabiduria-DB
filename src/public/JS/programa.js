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
    renderTargets(programa.objetivos, document.getElementById('targets_items'))
    renderAreas(programa.areas, document.getElementById('areas_items'))
    renderContents(
        programa.asignaturas,
        document.getElementById('content_items')
    )
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
        span.textContent = area.nom_area + ':'
        p.textContent = '\t' + area.desc_area

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

    rdm.setAttribute('href', 'Inscripcion.html')
    container.innerHTML = ''
    container.appendChild(titulo)
    container.appendChild(descripcion)
    container.appendChild(rdm)
}

function renderInfoGeneral({ desc_extra }, container) {
    const descripcion = document.createElement('p')

    descripcion.textContent = desc_extra

    container.innerHTML = ''
    container.appendChild(descripcion)
}

/** {
    "id_obj": 1,
    "id_pro": 1,
    "titulo_obj": "Dominio de Fundamentos",
    "desc_obj": "Dominar los fundamentos de la programación y la lógica de algoritmos para resolver problemas complejos en el campo de la ciencia de la computación."
} */
function renderTargets(targets, container) {
    /** <div class="target_item">
                        <div class="icon_container">
                            <span class="icon">
                                <img src="images/bombilla.png" alt="" />
                            </span>
                        </div>
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
        const icon_container = document.createElement('div')
        icon_container.className = 'icon_container'
        const icon = document.createElement('span')
        icon.className = 'icon'
        const img = document.createElement('img')
        img.src = 'images/bombilla.png'
        const content = document.createElement('div')
        content.className = 'content'
        const h2 = document.createElement('h2')
        h2.textContent = target.titulo_obj
        const p = document.createElement('p')
        p.textContent = target.desc_obj

        icon.appendChild(img)
        icon_container.appendChild(icon)
        content.appendChild(h2)
        content.appendChild(p)
        target_item.appendChild(icon_container)
        target_item.appendChild(content)
        container.appendChild(target_item)
    }

    container.innerHTML = ''
    targets.forEach((target) => {
        renderTarget(target, container)
    })
}

function renderContents(contents, container) {
    /*                        <h2>Strategy</h2>
                        <ul>
                            <li><p>Brand Positioning</p></li>
                            <li><p>Brand Architecture</p></li>
                            <li><p>Naming</p></li>
                            <li><p>Content Strategy</p></li>
                            <li><p>Experience Mapping</p></li>
                            <li><p>Social Media Strategy</p></li>
                        </ul>
                    </div> */
    function renderContent(content, container) {
        const content_item = document.createElement('div')
        content_item.className = 'content_item'
        const h2 = document.createElement('h2')
        h2.textContent = content[0]
        const ul = document.createElement('ul')
        const asignaturas = content[1]
        for (const asignatura of asignaturas) {
            const li = document.createElement('li')
            const p = document.createElement('p')
            p.textContent = asignatura.nom_asig
            li.appendChild(p)
            ul.appendChild(li)
        }

        content_item.appendChild(h2)
        content_item.appendChild(ul)
        container.appendChild(content_item)
    }

    container.innerHTML = ''
    contents.sort((a, b) => b[1].length - a[1].length)
    contents.forEach((content) => {
        renderContent(content, container)
    })
}
