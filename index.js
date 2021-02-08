const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("hello backend home")
});
app.get('/about', (req, res) => {
    res.send("hello backend about")
});
app.get('*', (req, res) => {
    res.send("hello backend error")
});





const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {console.log(`server start at ${PORT}, go to http://localhost:${PORT}/`)});