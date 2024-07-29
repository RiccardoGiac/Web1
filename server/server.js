const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
var iPortaTcp = 4201;
var sIpAddress = "127.0.0.1"
app.listen(iPortaTcp,sIpAddress, () => console.log('API is running on http://' + sIpAddress +
':' + iPortaTcp));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//**********
//Routing
//********** 

//pagina di invio della form
app.get('/formRegistrazione', (req, res) => {
console.log("Mi hai chiesto la form di registrazione");
res.sendFile("formSemplice.html", { root: './htdoc' });
});

//pagina di gestione dei dati della form se il metodo è POST
app.post('/mansendfile', (req, res) => {
console.log(req.body.password)
pass_ricevuta  = req.body.password;
if(pass_ricevuta == "paperino")
    res.send("<html>Bravo " + req.body.email + "<br>Sono pronto a ricevere il file!</html>")
else
    res.send("<html>Attenzione, password errata. </html>");

});

app.get('/sendFile', (req, res) => {
    console.log("Mi hai chiesto la form di invio del file");
    res.sendFile("sendfile.html", { root: './htdoc' });
    });

//pagina di gestione dei dati della form se il metodo è GET
app.get('/gestisciDatiForm', (req, res) => {
console.log(req.query.fname);
console.log(req.query.fcognome);
response = "<html>Buona serata " + req.query.fname + req.query.fcognome;

if(req.query.fsesso== "1")
    response += "<br>Sei un maschio"
else if(req.query.fsesso=="0")
    response += "<br>Non hai un sesso definito"
else
    response += "<br>Sei una femmina"

response += "<br>Vieni da " + req.query.fComune;

response += "<br> Ti voglio bene </html>";

res.send(response);
});

app.post('/gestisciDatiForm', (req, res) => {
    console.log(req.body.fname);
    console.log(req.body.fcognome);
    response = "<html>Buona mattinata " + req.body.fname + req.body.fcognome;
    
    if(req.body.fsesso== "1")
        response += "<br>Sei un maschio"
    else if(req.body.fsesso=="0")
        response += "<br>Non hai un sesso definito"
    else
        response += "<br>Sei una femmina"
    
    response += "<br>Vieni da " + req.body.fComune;
    
    response += "<br> Ti voglio bene </html>";
    
    res.send(response);
    });
