const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { getShapes } = require('./getShapes')


app.get('/', async (req, res) => {
  
  let shapes = await getShapes()
  
  res.send(shapes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
