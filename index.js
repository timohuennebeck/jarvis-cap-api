const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

// users routes
const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes);

// leads routes
const leadsRoutes = require("./routes/leadsRoute");
app.use("/leads", leadsRoutes);

app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});
