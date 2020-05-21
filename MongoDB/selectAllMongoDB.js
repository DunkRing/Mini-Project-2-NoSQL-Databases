const mongoose = require('mongoose');

//connection to mongodb server
mongoose.connect("mongodb://localhost:27017/miniproject2", {useNewUrlParser: true, useUnifiedTopology: true});

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

var t0 = Date.now()
Data.find(function(err, datas){
    if (err) {
        console.log(err)
    } else {
        var t1 = Date.now()
        console.log("Select all elements time: " + (t1-t0) + " milliseconds.")
    }
    mongoose.connection.close();
});
