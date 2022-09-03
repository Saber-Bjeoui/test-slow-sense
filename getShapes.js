const { db } = require('./db')
const Request = require('tedious').Request

exports.getShapes = function () {
  return new Promise((resolve, reject) => {
    let query = `select * from Shapes`;

    db.connect()

    db.on('connect', (err) => {
      console.log('Connecting...')
      if (err) {
        console.log(err)
        reject()
      } else {
        let request = new Request(query, (err, rowCount, rows) => {
          if (err) {
            console.log(err)
            reject()
          } else {
            console.log(rows)
            resolve(rows)
            console.log(`${rowCount} rows`)
          }
          db.close()
        })




        db.execSql(request)
     
      }
    })

    db.on('debug', function (message) {
      console.log('debug:', message)
    })
  })
}
