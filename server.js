const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "dist")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(3333, () => {console.log("server is ready...");})