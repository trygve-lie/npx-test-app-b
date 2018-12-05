#! /usr/bin/env node
'use strict';

const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send('Hello from app-b');
});

app.listen(5000, () => {
    console.log('app-b running at http://localhost:5000');
    console.log('node.js version used', process.versions.node);
});
