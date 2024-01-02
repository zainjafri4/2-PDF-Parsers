import { PdfReader } from "pdfreader"
import fs from 'fs'

// new PdfReader().parseFileItems("./Devices.pdf", (err, item) =>{
//     if (err) console.log(err)
//     else if (!item) console.log("No Items Found")
//     else if (item.text) console.log(item.text)
// });

fs.readFile('./Devices.pdf', (err, pdf)=>{
    new PdfReader().parseBuffer(pdf, (err, buffer)=>{
        if (err) console.log(err)
        else if (!buffer) console.log("End of File")
        else if (buffer.text) console.log(buffer.text)
    })
})