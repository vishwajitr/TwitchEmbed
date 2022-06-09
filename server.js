// https://medium.com/@kellydsample/challenge-3-run-a-vanilla-js-project-in-your-browser-with-node-791e124aa2c6    
// https://gist.github.com/TheCyberQuake/a1bc927e321caab614b9092bf6cf685e

const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});
