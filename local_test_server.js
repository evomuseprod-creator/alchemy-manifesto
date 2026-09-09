const http = require('http');
const fs = require('fs');
const path = require('path');

// Extract DeepSeek key from /Users/user/Zach/.env without logging it
const envContent = fs.readFileSync('/Users/user/Zach/.env', 'utf8');
const match = envContent.match(/deepseek[^:\w]*[:=]\s*["']?([^"'\s]+)["']?/i);
if (match) {
  process.env.DEEPSEEK_API_KEY = match[1].trim();
}

const generateHandler = require('./netlify/functions/generate.js').handler;

const server = http.createServer(async (req, res) => {
  const url = req.url.split('?')[0];

  if (url === '/.netlify/functions/generate' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const event = { httpMethod: 'POST', body };
        const result = await generateHandler(event, {});
        res.writeHead(result.statusCode, result.headers || { 'Content-Type': 'application/json' });
        res.end(result.body);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static file serving
  let filePath = path.join(__dirname, url === '/' ? 'index.html' : url);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json'
  };

  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Local test server running at http://127.0.0.1:3000');
});
