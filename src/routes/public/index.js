import fs from 'fs/promises'
import { Router } from 'express'

const router = Router()

const dir = 'src/public'

// get all the html files in the public directory
const files = await fs.readdir(dir)
const htmlFiles = files
    .filter((file) => file.endsWith('.html'))
    .map((file) => file.split('.')[0])

// create a route for each html file
htmlFiles.forEach((file) => {
    router.get(`/${file}`, async (req, res) => {
        res.sendFile(`${file}.html`, { root: dir })
    })
})

export default router
