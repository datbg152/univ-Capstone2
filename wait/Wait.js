const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 홈페이지로 이동하는 핸들러
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST 요청을 처리하는 핸들러
app.post('/home', (req, res) => {
  // 여기에 홈페이지로 이동하는 로직을 작성합니다.
  // 예를 들어, 다음과 같이 홈페이지 URL로 리다이렉트할 수 있습니다.
  res.redirect('/');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
