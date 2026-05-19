#!/usr/bin/env node

// Script para gerar index.html na pasta dist/client após build
const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, 'dist', 'client');
const indexPath = path.join(clientDir, 'index.html');

// Ler os arquivos gerados para encontrar os nomes corretos
const assetsDir = path.join(clientDir, 'assets');
const files = fs.readdirSync(assetsDir);

const jsFile = files.find(f => f.match(/^index-[\w]+\.js$/));
const cssFile = files.find(f => f.match(/^styles-[\w]+\.css$/));

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sara Ferraz Mateus | Portfólio Criativo</title>
    ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="./assets/${jsFile}"><\/script>` : ''}
  </body>
</html>`;

fs.writeFileSync(indexPath, html, 'utf-8');
console.log('✓ Generated index.html');
