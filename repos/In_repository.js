const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname)));

// 홈페이지로 이동하는 핸들러
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'In_repository.html'));
});

// 파일 생성을 처리하는 핸들러
app.post('/create-file', (req, res) => {
  // 여기에 파일 생성 로직을 작성합니다.
  res.send('파일을 생성했습니다.');
});

// 저장소 삭제를 처리하는 핸들러
app.post('/delete-repository', (req, res) => {
  // 여기에 저장소 삭제 로직을 작성합니다.
  res.send('저장소를 삭제했습니다.');
});

// 코드 목록에서 각 코드 요소에 대한 버튼 이벤트 처리
app.post('/show-code', (req, res) => {
  // 클라이언트에서 보낸 요청을 처리합니다.
  const code = req.body.code;
  console.log(`Show code button clicked for ${code}`);
  // 여기에 코드 표시 기능을 구현합니다.
  // 예시로 코드명을 그대로 반환합니다. 실제 코드 내용은 여기서 쿼리하거나 다른 로직으로 가져와야 합니다.
  res.send(`${code} content`);
});

app.post('/edit-code', (req, res) => {
  // 클라이언트에서 보낸 요청을 처리합니다.
  console.log('Edit code button clicked');
  // 여기에 코드 편집 기능을 구현합니다.
  res.send('코드를 편집했습니다.');
});

// 코드 스크린 버튼에 대한 이벤트 처리
app.post('/code-history', (req, res) => {
  // 클라이언트에서 보낸 요청을 처리합니다.
  console.log('Code history button clicked');
  // 여기에 코드 히스토리 표시 기능을 구현합니다.
  res.send('코드 히스토리를 표시했습니다.');
});

app.post('/sync-code', (req, res) => {
  // 클라이언트에서 보낸 요청을 처리합니다.
  console.log('Sync code button clicked');
  // 여기에 원본 코드 동기화 기능을 구현합니다.
  res.send('원본 코드를 동기화했습니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://210.125.31.240:${port} 에서 실행 중입니다.`);
});
