const express = require('express')
const app = express()
const port = process.env.PORT || 3000



const Connection = require('tedious').Connection
const Request = require('tedious').Request

const config = {
  server: 'slowsense.database.windows.net',
  options: {
    database: "ShapesTest"
  },
  authentication: {
    type: 'default',
    options: {
      userName: 'SlowSenseTest', // update me
      password: 'slow-test-55' // update me
    }
  }
}

const connection = new Connection(config)

connection.on('connect', (err) => {
    console.log('Connecting...')
  if (err) {
    console.log(err)
  } else {
    executeStatement()
  }
})

function executeStatement () {
    request = new Request("select * from Shapes", (err, rowCount) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`${rowCount} rows`)
      }
      connection.close()
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
  
    connection.execSql(request)
  }

app.get('/shapes', (req, res) => {
    
   
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
