const server = require("./api/server.js");
require("dotenv").config();

const port = process.env.PORT ? process.env.PORT : 4000;

server.get("/", (req, res) => {
    res.send(200).json({});
});

server.listen(4000, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
