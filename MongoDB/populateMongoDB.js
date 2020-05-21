const mongoose = require('mongoose');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const allDataElement = [];

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

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    //Printing csv parser result
    //console.log(results);

    results.forEach(element => {
        allDataElement.push(element);
    });

    //Inserting all elements to MongoDB
    var t0 = Date.now()
    Data.collection.insert(allDataElement, function (err, docs) {
        if (err){ 
            return console.error(err);
        } else {
          var t1 = Date.now()
          console.log("Multiple documents of data inserted to data Collection");
          console.log("Populate data to MongoDB took " + (t1 - t0) + " milliseconds.")
        }
      });
  });






  