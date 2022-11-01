const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 4040;

app.use(cors());
app.use(express.json());

// users routes
const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes);

// leads routes
const leadsRoutes = require("./routes/leadsRoute");
app.use("/leads", leadsRoutes);

// progress routes
const progressRoute = require("./routes/progressRoute");
app.use("/progress", progressRoute);

app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});

// fast-csv

// const fs = require("fs");
// const fastcsv = require("fast-csv");

// let stream = fs.createReadStream("");
// let csvData = [];
// let csvStream = fastcsv
//     .parse()
//     .on("data", function(data) {
//         csvData.push(data)
//     })
//     .on("end", function() {
//         // remove header
//         csvData.shift();

//         //
//     })
