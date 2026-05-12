const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.json({ mensagem: "API Yearbook funcionando" })
})

app.listen(3000)