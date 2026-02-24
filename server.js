const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Express 웹 서버가 ${port}번 포트에서 가동 중입니다...`);
});

