const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

const API_SERVICE_URL = "https://api.externa.com";

app.use('/api', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '',
    },
}));

const PORT = 5001;
app.listen(PORT, () => console.log(`Proxy corriendo en http://localhost:${PORT}`));
