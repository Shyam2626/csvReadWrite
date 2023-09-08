const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'newData.csv',
    header: [
        { id: 'fullname', title: "NAME" },
        { id: 'position', title: "POSITION" },
        { id: 'age', title: "AGE" }
    ]
});

const records = [
    { fullname: 'Shyam', position: 'Developer', age: 21 },
    { fullname: 'JohnCena', position: 'Fighter', age: 50 },
    { fullname: 'Virat Kohli', position: 'Cricketer', age: 35 },
    { fullname: 'Sindhu', position: 'Badminton', age: 28 }
];
csvWriter.writeRecords(records).then(() => { console.log("Csv Created") })
