const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const morgan = require('morgan')
const bodyParser = require('body-parser')

express()
  .use(morgan('combined'))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .get('/', (req, res) => {
    console.log("===============GET=====================")
    console.log("body ======> ", JSON.stringify(req.body));
    console.log("headers ======> ", JSON.stringify(req.headers));
    res.send('hi');
  }).post('/', ((req, res) => {
    console.log("===============POST=====================")
    console.log("body ======> ", JSON.stringify(req.body));
    console.log("headers ======> ", JSON.stringify(req.headers));
    res.send('hi');
  })).put('/', ((req, res) => {
    console.log("===============PUT=====================")
    console.log("body ======> ", JSON.stringify(req.body));
    console.log("headers ======> ", JSON.stringify(req.headers));
    res.send('hi');
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
