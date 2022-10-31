const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 4040;

app.use(cors());
app.use(express.json());

// leads routes
const leadsRoutes = require("./routes/leads");
app.use("/leads", leadsRoutes);

// review routes
const reviewRoutes = require("./routes/review");
app.use("/review", reviewRoutes);

app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});
