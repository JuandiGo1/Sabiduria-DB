/* eslint-disable no-undef */

async function getPrograms() {
    const res = await fetch(programs_url)
    const data = await res.json()

    return data.data
}

/**
                    <div class="logo">
                        <img src="./images/Logo1.png" alt="Logo" />
                        <h3>Management & leadership</h3>
                    </div>
 */
/** {
        id_pro: 1,
        nom_pro: 'Computer Science',
        descri_pro: 'Study of computer systems and software development',
        obj_pro:
            'To prepare students for careers in technology and software engineering',
        costo_pro: 10000,
        svg_icon: 'laptop-code'
    } */
/**
 *
 * @param {*} program
 * @param {HTMLDivElement} container
 */
async function renderProgram(program, container) {
    container.innerHTML = `
        <div class="logo">
			<a href="/programa#${program.slug}">
				<img src="./images/programs/${program.svg_icon}.svg" alt="Logo" />
			</a>
            <h3>${program.nom_pro}</h3>
        </div>
`
}

async function main() {
    const programs = await getPrograms()
    console.log(programs)
    const container = document.querySelector('.programs')
    container.innerHTML = ''

    for (const program of programs) {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card')
        container.appendChild(cardContainer)
        await renderProgram(program, cardContainer)
    }
}

main()
// console.log(document.querySelector('.card'))
