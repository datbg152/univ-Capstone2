const express = require('express')
const app = express()
const port = 80
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const _retfile = path.resolve(__dirname, 'public/index.html');
    res.sendFile(_retfile);
});

// 회원가입 양식 제출을 처리하는 핸들러
app.post('/signup', (req, res) => {
    // POST 요청으로부터 이메일과 비밀번호를 가져옴
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body['confirm-password'];

    // 받은 데이터를 콘솔에 출력
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // 회원 가입이 성공적으로 완료되면 Wait.html로 리다이렉션
    const _retfile = path.resolve(__dirname, 'public/mainpage.html');
    res.sendFile(_retfile);
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://210.125.31.240:${port} 에서 실행 중입니다.`);
});
