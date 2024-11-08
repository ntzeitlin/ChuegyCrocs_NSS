const { crocCollection } = require("./data.js")
const {
    crocDetails, getFlips, getPuffBoots, getCrushSandals,
    getClassicClogs, getClassicBoots, getSlides
} = require("./functions.js")

console.log('ALL CROCS:')
console.log('---------------------------------')

for (const croc of crocCollection) {
    console.log(`\t${crocDetails(croc)}`)
}

console.log('')

console.log('STYLES:')
console.log('---------------------------------')

console.log('FLIP CROCS:')
console.log(getFlips(crocCollection))

console.log('PUFF BOOTS:')
console.log(getPuffBoots(crocCollection))

console.log('CRUSH SANDALS:')
console.log(getCrushSandals(crocCollection))

console.log('CLASSIC CLOGS:')
console.log(getClassicClogs(crocCollection))

console.log('CLASSIC BOOTS:')
console.log(getClassicBoots(crocCollection))

console.log('SLIDES:')
console.log(getSlides(crocCollection))

/* 
AREAS TO REFACTOR:
Combine get functions into single generalized get function
Create a display message function to generate the current console.log messages in an array
then loop through the area to display the messages instead of logging each one. 

*/