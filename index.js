const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883

aedes.on('publish', (packet, client) => {
  if (client) {
    console.log(`${packet.topic}: ${String(packet.payload)}`)
  }
})

server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
