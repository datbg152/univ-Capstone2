const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.use(express.static('public', {
  index: ['index.html', 'index.htm']
}));

 app.get('/', (req, res) => res.send('안녕하세요.\n익스프레스에 오신걸 환영합니다.'));

 app.listen(port, () => console.log('%d 포트에서 기다립니다.', port));
