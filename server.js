const express = require('express');
const app = express();

app.use(express.json());  // 使服务器能够解析 JSON 格式的请求体

let distance = 0;  // 用于存储距离数据

// 接收来自 Arduino 的 POST 请求并更新距离
app.post('/update', (req, res) => {
    distance = req.body.distance;
    console.log('Distance updated:', distance);
    res.status(200).send('Distance updated');
});

// 提供距离数据给前端
app.get('/distance', (req, res) => {
    res.json({ distance: distance });
});
app.get('/', (req, res) => {
    res.send('Test test hopefully it works');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
