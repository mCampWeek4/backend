const express = require('express');
const { sequelize } = require('./models');

const port = 80;

const usersRouter = require('./routes/user');




const app = express();
app.set('port', port);

sequelize.sync({ force: false })
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.error(err);
    })


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send("hello, express");
// });

// app.use('/users', usersRouter);


sequelize.sync().then(() => {
    console.log("DB Connect Success!");
}).catch((err) => {
    console.log("DB Connect Fail!");
    console.log(err);
});


app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});