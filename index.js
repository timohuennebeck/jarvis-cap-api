const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

require("dotenv").config();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Welcome to the API!");
});

// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
    // Get the prompt from the request
    const { prompt } = req.body;

    // Generate a response with ChatGPT
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 1,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });
    res.send(completion.data.choices[0].text);
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
