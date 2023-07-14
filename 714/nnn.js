const express = require('express');
const app = express();
const path = require('path');

const port = 3000;
const domain = 'hotna.space'; // 替换为你的域名

// 设置静态文件目录
app.use(express.static(path.join(__dirname, '714')));

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://${domain}:${port}`);
});
