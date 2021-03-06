var Seneca = require('seneca')

Seneca({tag: 'hex'})
  .test('print')
  .use('consul-registry', {
    host: '127.0.0.1'
  })
  .use('../logic/hex')
  .use('../..', {
    pin: 'role:color,format:hex',
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  .ready(function () {
    var seneca = this
    console.log('hex', seneca.id)
  })


