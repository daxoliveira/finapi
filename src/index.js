const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World Rocketseat Ignite"
  })
})

app.listen(3333);