// Create a Server with Express.js
// const express = require("express");
// const app = express();
// const port = 7777;

// app.listen(port, () => {
//   console.log("Server is runnning on port " + port);
// });




// Use Routes to respond to different paths and in express order will matter always
const express = require("express");
const app = express();
const port = 7777;

app.use("/hello", (req, res) => {
    res.send("Hello world from /hello");
});

app.use("/test", (req, res) => {
    res.send("Hello world from /test");
});

app.use("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log("Server is runnning on port " + port);
});