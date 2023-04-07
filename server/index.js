const port = 3002
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
  res.send(`<h1>Hello world!, this is a ${req.method} request</h1>`)
})

app.post('/', (req, res)=>{
  res.send('<h1>Respondendo uma requisição POST!</h1>')
})

app.listen(port, ()=>{
  console.log('Iniciando servidor express')
});
