const express = require('express');
const app = express();
const port = 8080;

// Définir une route de base
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});