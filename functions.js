const crocDetails = (shoe) => {
    return `${shoe.color} ${shoe.name} ${shoe.type}`
}

const getFlips = (crocs) => {
    let flips = ''
    for (const croc of crocs) {
        if (croc.type === 'Flip') {
            flips += `\t${croc.name}\n`
        }
    }
    return flips
}

const getPuffBoots = (crocs) => {
    let puffs = ''
    for (const croc of crocs) {
        if (croc.type === 'Puff Boot') {
            puffs += `\t${croc.name}\n`
        }
    }
    return puffs
}

const getCrushSandals = (crocs) => {
    let sandals = ''
    for (const croc of crocs) {
        if (croc.type === 'Crush Sandal') {
            sandals += `\t${croc.name}\n`
        }
    }
    return sandals
}

const getClassicClogs = (crocs) => {
    let clogs = ''
    for (const croc of crocs) {
        if (croc.type === 'Classic Clog') {
            clogs += `\t${croc.name}\n`
        }
    }
    return clogs
}

const getClassicBoots = (crocs) => {
    let boots = ''
    for (const croc of crocs) {
        if (croc.type === 'Classic Boot') {
            boots += `\t${croc.name}\n`
        }
    }
    return boots
}

const getSlides = (crocs) => {
    let slides = ''
    for (const croc of crocs) {
        if (croc.type === 'Slide') {
            slides += `\t${croc.name}\n`
        }
    }
    return slides
}

module.exports = {
 crocDetails, getFlips, getPuffBoots, getCrushSandals,
 getClassicClogs, getClassicBoots, getSlides
}