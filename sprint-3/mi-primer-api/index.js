const express = require('express')
const app = express()
const port = process.env.PORT_ENV || 3000

let count=0
app.get('/contador', (req, res) => {
count=count+1
  
console.log('Contador '+count)
res.send("contador: "+ count )
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

