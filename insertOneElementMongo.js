const mongoose = require('mongoose');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];


//connection to mongodb server
mongoose.connect("mongodb://localhost:27017/miniproject2", {useNewUrlParser: true, useUnifiedTopology: true});

// https://www.stats.govt.nz/assets/Uploads/New-Zealand-cohort-life-tables/New-Zealand-cohort-life-tables-March-2020-update/Download-data/complete-cohort-life-tables-1876-2018.csv
const dataSchema = new mongoose.Schema ({
    id: Number,
    yearofbirth: Number,
    sex: String,
    age: Number,
    percentile: Number,
    dx: Number,
    ex: Number,
    llx: Number,
    lx: Number,
    mx: Number,
    px: Number,
    qx: Number,
    sx: Number,
});
var Data = mongoose.model('Data', dataSchema);
//person.save();

const data = new Data({
    id: 9999999,
    yearofbirth: 1996,
    sex: 'male',
    age: 23,
    percentile: 5132512,
    dx: 51235,
    ex: 765,
    llx: 1,
    lx: 0.125,
    mx: 0.532,
    px: 33,
    qx: 1,
    sx: 2,
});
var t0 = Date.now()
data.save();
var t1 = Date.now()
console.log("Insert one element " + (t1 - t0) + " milliseconds.")


