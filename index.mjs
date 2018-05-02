import http from 'http';
import fs from 'fs';
import path from 'path';

http.createServer((req, res) => {
  const { base, ext } = path.parse(req.url);

  if (['index.html', 'script.js'].includes(base)) {
    fs.readFile(base, (error, data) => {
      if (error) {
        return res.end(JSON.stringify(error));
      }

      const mimetype = ext === '.js' ? 'text/javascript' : 'text/html';
      res.setHeader('Content-Type', mimetype);
      res.end(data);
    });
  } else {
    res.end(`Invalid path: ${req.url}`);
  }
}).listen(8080);
