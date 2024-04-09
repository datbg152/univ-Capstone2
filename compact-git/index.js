const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const qs = require('querystring')

app.use(express.static('public'))

app.get('/', (req, res) => {
    const retfile = path.resolve(__dirname, 'public/main.html')
    res.sendFile(retfile);
})

app.post('/', (req, res) => {
    if (req.method == 'POST') {
        let body = ''
        req.on('data', (data) => {
            body += data
        })
        req.on('end', () => {
            var post = qs.parse(body);
            
            if (post.type === 'type.login') {
                res.redirect('/login')
            }
            else if (post.type === 'type.sign-up') {
                res.redirect('/sign-up')
            }
            else if (post.type === 'type.new-pw') {
                res.redirect('/new-pw')
            }
        });
    }
})

app.get('/sign-up', (req, res) => {
    const retfile = path.resolve(__dirname, 'public/sign-up.html')
    res.sendFile(retfile)
})

app.post('/sign-up', (req, res) => {
    if (req.method == 'POST') {
        let body = ''
        req.on('data', (data) => {
            body += data
        })
        req.on('end', () => {
            var post = qs.parse(body);
            
            if (post.type === 'type.sign-up-up') {
                console.log('sign up')
            }
        });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})