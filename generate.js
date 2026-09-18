const fs = require('fs');
const ttf = fs.readFileSync('font/KMR.ttf');
const base64 = ttf.toString('base64');
const css = `@font-face {
  font-family: 'Apparat';
  src: url(data:font/truetype;charset=utf-8;base64,${base64}) format('truetype');
  font-weight: normal;
  font-style: normal;
}`;
fs.writeFileSync('font.css', css);
