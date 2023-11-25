import puppeteer from 'puppeteer'
import fs from 'fs/promises'

const iconNames = ['film', 'building', 'balance-scale', 'scroll']

const downloadNames = []

console.log(iconNames.map((icon) => icon.replace('fa-', '')))

async function downloadIcon(iconToDownload) {
    console.log(`Descargando el icono ${iconToDownload}`)
    const browser = await puppeteer.launch({
        headless: 'new'
    })
    const page = await browser.newPage()

    // Habilitar la interceptación de solicitudes
    await page.setRequestInterception(true)

    // Manejar las solicitudes
    page.on('request', (request) => {
        // Cancelar la descarga de SVGs

        if (
            request.resourceType() === 'fetch' &&
            request.url().includes('svg')
        ) {
            const file_name = request.url().split('/').pop()
            console.log(
                `para el icono ${iconToDownload} se descargara el archivo ${file_name}`
            )
            request.continue()
        } else {
            request.continue()
        }
    })

    // Navigate the page to a URL
    await page.goto(`https://fontawesome.com/search?q=${iconToDownload}&o=r`)

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 })

    // get the div icons-results
    const divIconsResults = await page.$('#icons-results')

    // get the first icon
    const icon = await divIconsResults.$('.wrap-icon')

    // get span witn class icon-name
    const iconName = await icon.$('.icon-name')

    // get the text of the span
    const text = await page.evaluate((iconName) => {
        return iconName.textContent
    }, iconName)

    downloadNames.push([iconName, text])
    console.log(
        `para el icono ${iconToDownload} se descargara el archivo ${text}`
    )

    const downloadUrl = `https://site-assets.fontawesome.com/releases/v6.4.2/svgs/solid/${text}.svg`

    try {
        const req = await fetch(downloadUrl)
        const res = await req.text()

        // create the file
        await fs.writeFile(
            `src/public/images/programs/${iconToDownload}.svg`,
            res
        )
        console.log(`se descargo el icono ${iconToDownload} \n`)
    } catch (error) {
        console.log(
            `se produjo un error al descargar el icono ${iconToDownload}`,
            error
        )
    }
    // Close the browser
    await browser.close()
}

async function downloadIcons() {
    for (const icon of iconNames) {
        try {
            await downloadIcon(icon)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(downloadNames)
}

downloadIcons()
