const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const _retfile = path.resolve(__dirname, 'public/mainpage.html');

    res.sendFile(_retfile);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})