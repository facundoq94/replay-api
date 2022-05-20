const express = require('express');
const app = express();

const example = {"menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }};

const port = process.env.PORT || 4000;

app.listen(port);

app.get("/", (req, res) => {
    res.send("home");
});

app.get("/getPartidos", (req, res) => {
    res.send(example);
});

console.log('listen on port', port);