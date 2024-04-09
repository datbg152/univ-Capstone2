const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
    const _retfile = path.resolve(__dirname, 'public/login.html')

    res.sendFile(_retfile);
})

app.post('/', (req, res) => {
    // let body = ''
    // req.on('data', data => body += data)
    // return req.on('end', () => {
    //     console.log(body)
    // })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})