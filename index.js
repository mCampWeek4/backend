const express = require('express');
const port = 3000;

const app = express();
app.set('port', port);

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, ()=> {
    console.log(`Now listening on port ${port}`);
});