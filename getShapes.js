const {getConnection} = require('./db')
const Request = require('tedious').Request

exports.getShapes = function () {
  return new Promise((resolve, reject) => {
    try {
      const db = getConnection()
     
      db.connect()

      db.on('connect', (err) => {
        if (err) {
          reject(err)
        } else {
          let query = `select * from Shapes`
          let request = new Request(query, (err, rowCount, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            db.close()
          })

          db.execSql(request)
        }
      })
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
