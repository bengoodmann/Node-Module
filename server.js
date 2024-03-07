const http = require("http");
const user = require("./user");
const dateTime = require("./today");

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
        ${user.userName()}.
        Today is ${dateTime.dateTime()}

    `);
});

server.listen(PORT, () => {
  console.log("server started on port:", PORT);
});
