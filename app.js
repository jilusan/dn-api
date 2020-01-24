const express = require('express')
const app = express()
const port = 80

const dns = [
    {
        firstName: 'Monique',
        familyName: 'Leyrac',
        sin: '960406361',
    },
    {
        firstName: 'Nicole',
        familyName: 'Martin',
        sin: '799288378',
    },
    {
        firstName: 'Leon',
        familyName: 'Redbone',
        sin: '360954739',
    },
];

// pas utile
const dnsStr = JSON.stringify(dns)

// Specified a default GET route for /, the home page.
// http://localhost/
// 1) The req variable contains information about the request
app.get('/', function (req, res) {
    console.log(req.url); // '/'
    // 2) We’re able to respond back to the HTTP request with response
    res.send('root')
})

app.get(`/`, (request, response) => {
    response.send('Hello, /');
  });

// A different response to the /queryAllDNs page 
// http://localhost/queryAllDNs
app.get('/dn', function (req, res) {
    res.json(dns);
    //res.send(dnsStr)
})

// A different response to the /queryDN/i page 
// http://localhost/queryDN/2
app.get('/dn/:dnNumber', function(req, res, next) {
    var dnNumber = req.params.dnNumber;
    res.send(dnNumber)
});

/*
app.get('/death/1', function (req, res) {
    res.send('death/1')
})
*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

