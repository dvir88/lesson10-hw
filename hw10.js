const fs = require('fs')

//1

fs.readFile('file.txt', (err, data)=>{
    if (err) throw err
    const count = data.split(" ").length
})

//2

const xslData = require("xlsx")
const fileName = xslData.readFile('file.xlsx')
const sheetName = fileName.SheetNames[0]
const worksheet = fileName.Sheets[sheetName]
const data = xslData.utils.sheet_to_json(worksheet)
const grades = data.map(row => row.grade)
const sum = grades.reduce((a, b) => a + b, 0)
const avg = grades.reduce((sum, grades) => sum + grades, 0)/grades.length

console.log("Avg:", avg)