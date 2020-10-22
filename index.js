const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const morgan = require('morgan')

express()
  .use(morgan('combined'))
  .get('/', (req, res) => {
    console.log("get", JSON.stringify(req));
    res.send('hi');
  }).post('/', ((req, res) => {
    console.log("post", JSON.stringify(req));
    res.send('hi');
  })).put('/', ((req, res) => {
    console.log("put", JSON.stringify(req));
    res.send('hi');
  }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
