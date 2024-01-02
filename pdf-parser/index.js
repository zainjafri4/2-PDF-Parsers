const fs = require('fs');
const pdfParse = require('pdf-parse');

pdfFile = fs.readFileSync('./Devices.pdf')

pdfParse(pdfFile)
.then(data =>{
    console.log(data.numpages)
    console.log(data.info)

    console.log(data.text)
})
.catch(error =>{
    console.log(error)
})