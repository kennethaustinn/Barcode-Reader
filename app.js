let DBR = require("dynamsoft-node-barcode");
(async()=>{
    let reader = await DBR.BarcodeReader.createInstance();
    let results = await reader.decode('C:\\Users\\kenne\\Desktop\\Barcode Scanner\\Testaufgabe-1.jpg');
    for(let result of results){
        console.log(result.barcodeText);
    }
    reader.destroy();
    await DBR.BarcodeReader._dbrWorker.terminate();
    process.exit();
})();
