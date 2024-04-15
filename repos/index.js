const express = require('express')
const app = express()
const port = 80
const path = require('path');

// 즐겨찾기 목록을 저장할 배열
let favorites = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
    const _retfile = path.resolve(__dirname, 'public/repository.html');
    res.sendFile(_retfile);
});

app.get('/addrepo', (req, res) => {
    const _retfile = path.resolve(__dirname, 'public/addrepo.html');
    res.sendFile(_retfile);
});

// 즐겨찾기 목록을 가져오는 엔드포인트
app.get('/favorites', (req, res) => {
    res.json(favorites);
});

// 즐겨찾기 아이템을 추가하는 엔드포인트
app.post('/favorites', (req, res) => {
    const newItem = req.query.item;
    favorites.push(newItem);
    res.send('Favorite added: ' + newItem);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// 210.125.31.240:80