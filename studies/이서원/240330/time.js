const express = require('express');

const app = express();

app.set('port', 80);

app.use(function (req, res, next) {
  console.log('Time:', Date());
  res.writeHead('200', {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`<h1>지금 시각은 ${Date()} 입니다.</h1>`);
});

app.listen(app.get('port'), () => console.log("웹서버가 %d 포트에서 실행되고 있습니다.", app.get('port')))
