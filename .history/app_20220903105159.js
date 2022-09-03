const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db');


app.get('/', (req, res) => {
    
    function executeStatement () {
        request = new Request("select 123, 'hello world'", (err, rowCount) => {
          if (err) {
            console.log(err)
          } else {
            console.log(`${rowCount} rows`)
          }
          db.close()
        })
      
        request.on('row', (columns) => {
          columns.forEach((column) => {
            if (column.value === null) {
              console.log('NULL')
            } else {
              console.log(column.value)
            }
          })
        })
      
        db.execSql(request)
      }
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
