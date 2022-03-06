let DBR = require("dynamsoft-node-barcode");
const pdf = require('pdf-poppler');

// Free Trial Product Keys
DBR.BarcodeReader.productKeys = "t0068NQAAAKYoYtBbnd2lBHiL+Gr2TRhbr/cmctjQzb8ttAHtOzrTIwqrABRkYRtfqYKUGd8X1J9VGP078TfkPIOqWa6e/9E="; 

let option = {
    format : 'jpeg',
    out_dir : '.\\',
    out_prefix : 'temp',
    page : 1
}
pdf.convert("C:\\Users\\kenne\\Desktop\\Barcode Scanner\\Testaufgabe.pdf" , option)
    .then(
        () => {
            (async()=>{
                let reader = await DBR.BarcodeReader.createInstance();
                for(let result of await reader.decode(".\\temp-1.jpg")){
                    console.log(result.barcodeText);
                }
                reader.destroy();
                await DBR.BarcodeReader._dbrWorker.terminate();
                process.exit();
            })();
        }
        )
        .catch(
            (error) => {
                console.log(error); 
            }
        )
    
