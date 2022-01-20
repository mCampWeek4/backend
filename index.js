const express = require('express');

const port = 80;

const app = express();
 

app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("hello, express");
});

app.listen(port, ()=> {
    console.log(`Now listening on port ${port}`);
});