const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  const _retfile = path.resolve(__dirname, 'public/mainpage.html');

  res.sendFile(_retfile);
})

app.use(express.static('public'));

// 메인 화면에서 signup 버튼 누를 경우 회원가입 화면으로
app.get('/signup', (req, res) => {
	res.redirect('/signup.html');
});

// 메인 화면에서 아이디 비번 입력 후 login 버튼 누를 경우 개인 화면으로
app.get('/login', (req,res) => {
  res.redirect('/index.html');
});

// 회원가입 화면에서 sign in 누르면 다시 메인으로 
app.get('/main', (req,res) => {
  res.redirect('/mainpage.html');
});


// 개인 화면에서 레포 클릭 시 
app.get('/repos', (req,res) => {
  res.redirect('/repository.html');
});

// 레포 생성 화면으로 
app.get('/addrepos', (req,res) => {
  res.redirect('/addrepo.html');
});

app.listen(port, () => {
        console.log('server is running on port ${port}')});
