const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const qs = require('querystring')
const mysql = require('mysql')

app.use(express.static('public'))

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;
const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "password"
});

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
            const post = qs.parse(body);
            
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
            const post = qs.parse(body);
            
            if (post.type === 'type.sign-up-up') {
                var query = 'use user_db;'
                con.query(query, (err, result) => {
                    if (err) throw err;
                    console.log("Result: " + result);
                });
                query = 'insert into user values("' + post.id + '", "' + post.pw + '", "' + post.name + '");';
                con.query(query, (err, result) => {
                    if (err) {
                        if (err.errno == 1062) {
                            res.send('Duplicate ID')
                            return
                        }
                    }
                    console.log("Result: " + result);
                    res.redirect('/private')
                });
            }
        });
    }
})

app.get('/private', (req, res) => {
    const retfile = path.resolve(__dirname, 'public/private.html')
    res.sendFile(retfile)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});