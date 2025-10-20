const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const { sql, poolPromise } = require('./config');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// 🛠 ĐÂY LÀ DÒNG QUAN TRỌNG NHẤT
app.use("/api/khoa", require("./routes/khoa")); // PHẢI CÓ DÒNG NÀY và đúng đường dẫn
app.use("/api/bacsi", require("./routes/bacsi"));
app.use("/api/benhnhan", require("./routes/benhnhan")); // bật sau
app.use("/api/lichhen", require("./routes/lichhen"));

// Khởi chạy server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
