const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

var users = [

]


app.get('/users', (_req, res) => {
    res.json(users)
    console.log(`List of users requested by ${_req.ip}`)
});

app.post('/users', (req, res) => {
    users.push(req.body)
    res.status(200).send("success")
    console.log(`Received new user from ${req.ip}, content: ${JSON.stringify(req.body)}`)
});



app.listen(port, () => console.log(`Node app listening on port ${port}!`));
