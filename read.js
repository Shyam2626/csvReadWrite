const csv = require('csv-parser')
const fs = require('fs')

const dataList = [];

fs.createReadStream('sampledata.csv').pipe(csv())
    .on('data', (data) => dataList.push(data))
    .on('end', () => { 
    console.log(dataList) });