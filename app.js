const path = require('path')
const express = require('express');

const app = express();

const publicDirCv = path.join(__dirname, './public');
app.use(express.static(publicDirCv));

const port = 2000;

app.get('/', (req, res) => {
    res.send('<h1>here is home page<h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h2>contact us here:<h2>')
})

app.get('/api', (req, res) => {
    res.send({name: 'oloyede', location: 'Texas'})
})


app.get('*', (req, res) => {
    res.send('<h2>Page not Found<h2>')
})












app.listen(port, () => {
    console.log(`Application running on port ${port}`)
})