const  express = require('express');

const app = express();

app.get('/hello', (req, res ) => {
    res.send("hollo world")
})

const port = 3000;
app.listen(port, ()=>{
    console.log("listening at port: ", port)
})  