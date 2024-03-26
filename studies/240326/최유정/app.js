const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.listen(port, () => {
	console.log('Example app listening on port 3000!')
});

// HTTP GET 요청
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// HTTP POST 요청
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// HTTP PUT 요청
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// HTTP DELETE 요청
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// 모든 HTTP 요청
app.all('/customer', function (req, res) {
  res.send('Got a ALL request at /customer');
});

// 문자열
app.get('/about', function (req, res) {
  res.send('about');
});

// 문자열 패턴
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// 정규식
app.get(/a/, function(req, res) {
  res.send('/a/');
});

// Path Variable
app.get('/user/:userId/item/:itemId', (req, res) => {
  const { userId, itemId } = req.params;
  res.send(`userId: ${userId}, itemId: ${itemId}`);
});

// 하나의 라우트에서 하나의 콜백 함수 실행
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

// 하나의 라우트에서 next 오브젝트를 사용해서 2개 이상의 콜백 함수 실행
app.get('/example/b', function (req, res, next) {
  console.log('첫 번째 콜백 함수');
  next();
}, function (req, res) {
  res.send('두 번째 콜백 함수');
});

// 콜백 함수 배열로 라우트 처리
var ex0 = function (req, res, next) {
  console.log('첫 번째 콜백 함수');
  next();
}

var ex1 = function (req, res, next) {
  console.log('두 번째 콜백 함수');
  next();
}

var ex2 = function (req, res) {
  console.log('세 번째 콜백 함수');
}

app.get('/example/c', [ex0, ex1, ex2]);

// 하나의 라우트에서 하나의 콜백 함수 실행
app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

// 하나의 라우트에서 next 오브젝트를 사용해서 2개 이상의 콜백 함수 실행
app.get('/example/b', function (req, res, next) {
  console.log('첫 번째 콜백 함수');
  next();
}, function (req, res) {
  res.send('두 번째 콜백 함수');
});

// 콜백 함수 배열로 라우트 처리
var ex0 = function (req, res, next) {
  console.log('첫 번째 콜백 함수');
  next();
}

var ex1 = function (req, res, next) {
  console.log('두 번째 콜백 함수');
  next();
}

var ex2 = function (req, res) {
  console.log('세 번째 콜백 함수');
}

app.get('/example/c', [ex0, ex1, ex2]);
