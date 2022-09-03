const Connection = require('tedious').Connection
var ISOLATION_LEVEL = require('tedious').ISOLATION_LEVEL

const config = {
  server: 'slowsense.database.windows.net',
  options: {
    database: 'ShapesTest',
    encrypt: true,
    rowCollectionOnDone: true,
    rowCollectionOnRequestCompletion: true
  },
  authentication: {
    type: 'default',
    options: {
      userName: 'SlowSenseTest', // update me
      password: 'slow-test-55', // update me
    },
  },
}

const connection = new Connection(config)

exports.db = connection
