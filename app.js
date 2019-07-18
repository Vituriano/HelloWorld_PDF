//Gerador de PDF
var fs = require('fs');
var pdf = require('html-pdf');

const data = `  

        <h1>Esse é o título</h1>
        <p>
            Esse documento em PDF foi gerado a partir de um código HTML usando NodeJS;
        </p>
`;

//gera html
fs.writeFile(`./HTML/newFile.html`, data, function (erro) {
    if (erro) throw erro;

    //ler html
    var html = fs.readFileSync(`./HTML/newFile.html`, 'utf8');
    var options = { format: 'Letter' };

    //gera PDF a partir do html
    pdf.create(html, options).toFile(`./Docs/newFile.pdf`, function (err, res) {
        if (err) throw erro;
        console.log(html);
    });

});