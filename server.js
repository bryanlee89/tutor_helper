const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(5555, () => console.log('Example app listening on port 3000!'))