// Servidor
const express = require("express");
const app = express();
const server = require("http").createServer(app);
//setar html
const path = require("path");
//body parser
const bodyParser = require('body-parser');
//Gerador de PDF
var fs = require('fs');
var pdf = require('html-pdf');

//seta html
app.use(express.static(path.join(__dirname, 'HTML')));
app.set("views", path.join(__dirname, 'HTML'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const data = `  <html>
                    <head>
                        <title>Html2PDF Learn<title>
                    </head>

                    <body>
                        <h1>Esse é o título</h1>
                        <p>
                            Esse documento em PDF foi gerado a partir de um código HTML usando NodeJS;
                        </p>
                    </body>
                </html> `;

//gera html
fs.writeFile(`./HTML/newFile.html`, data , function (erro) {
    if (erro) throw erro;
});
//ler html
var html = fs.readFileSync(`./HTML/newFile.html`, 'utf8');
//var options = { format: 'A4', orientation: 'portrait' };
 //gera PDF a partir do html
pdf.create(html, options).toFile(`./Docs/newFile.pdf`, function (err, res) {
    if (err) throw erro;
});

server.listen(3000);