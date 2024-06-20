import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// __dirname == /Users/marianamacedo/Documents/CoderHouse/trabalho-final/teste/server

const app = express();
const port = 5500;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Use connect-history-api-fallback middleware for SPA routing
app.use(history({
  // Middleware options to rewrite route paths
  rewrites: [
    { from: /^\/$/, to: '/routes/inicio.html' },
    { from: /^\/sobre/, to: '/routes/sobre.html' }
  ]
}));

// Fallback for all other routes to serve index.html
app.get('*', ( _, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
