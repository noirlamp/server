import server from './src/server.js'

const port = process.env.PORT || 3200

console.log(process.env.PORT)

server.listen(port, () => {
  console.log(`Noirlamp API server started on ${port}`)
})