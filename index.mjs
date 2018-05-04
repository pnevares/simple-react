import fs from 'fs';
import http from 'http';
import path from 'path';

const root = 'lib';

http.createServer((req, res) => {
  const { base, ext } = path.parse(req.url);

  let mimetype = 'text/plain';
  switch(ext) {
    case '.js':
      mimetype = 'text/javascript';
      break;
    case '.html':
      mimetype = 'text/html';
      break;
  }

  fs.readFile(path.join(root, base), (error, data) => {
    if (error) {
      res.statusCode = 404;
      return res.end();
    }

    res.setHeader('Content-Type', mimetype);
    res.end(data);
  });
}).listen(8080);
