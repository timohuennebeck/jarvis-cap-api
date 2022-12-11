const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Welcome to the API!");
});

// users routes
const usersRoutes = require("./routes/usersRoute");
app.use("/users", usersRoutes);

// contacts routes
const contactsRoutes = require("./routes/contactsRoute");
app.use("/contacts", contactsRoutes);

// contacts funnel routes
const contactsFunnelRoutes = require("./routes/contactsFunnelRoute");
app.use("/contactsFunnel", contactsFunnelRoutes);

// companies routes
const companiesRoutes = require("./routes/companiesRoute");
app.use("/companies", companiesRoutes);

// companies funnel routes
const companiesFunnelRoutes = require("./routes/companiesFunnelRoute");
app.use("/companiesFunnel", companiesFunnelRoutes);

// faqs routes
const faqsRoutes = require("./routes/faqsRoute");
app.use("/faqs", faqsRoutes);

// faqs routes
const todosRoutes = require("./routes/todosRoute");
app.use("/todos", todosRoutes);

app.listen(PORT, () => {
    console.log(`Express listening on ${PORT}`);
});
