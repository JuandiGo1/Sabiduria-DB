import fs from 'fs/promises'

import programs from 'db/seeds/programs.json' assert { type: 'json' }

const programsWithIcons = programs.map((program) => {
    const icon = program.svg_icon.replace('fa-', '')
    const { obj_pro, ...rest } = program
    return {
        ...rest,
        svg_icon: icon
    }
})
console.log(programsWithIcons)

const programsWithIconsJSON = JSON.stringify(programsWithIcons, null, 2)

fs.writeFile('src/db/seeds/programs.json', programsWithIconsJSON)
