const express = require('express')
const app = express()
const port = process.env.PORT || 3000





app.get('/shapes', (req, res) => {
    
   
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
