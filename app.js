const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const { getShapes } = require('./getShapes');
const { shape } = require('./shape.model');

app.use(cors())


app.get('/shapes', async (req, res) => {

  try {
    let shapes = await getShapes()

    shapes = shapes.map((rawData) => shape(rawData));
    
    res.send(shapes)

  } catch (error) {
    res.status(500).send({message: "Oops something wrong happened!!"})
  }
  
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
