const  express = require('express');

const app = express();
const cors = require('cors')
app.use(cors());

app.use(express.json())
app.post('/api/register', (req, res ) => {
    console.log(req.body)
    res.json({status: "ok"})
})

const port = 1337;
app.listen(port, ()=>{
    console.log("listening at port: ", port)
})  