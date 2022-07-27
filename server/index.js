const  express = require('express');

const app = express();
const cors = require('cors')



// ive done my database models here because it threw an error 

const mongoose = require('mongoose')
//this line will now coonect to the database and create the database with the passed name
mongoose.connect('mongodb://localhost:27017/full-stack-mern-video')
console.log(mongoose.connection.readyState)

//create a chema and define the data types
const User = new mongoose.Schema(
    {
      name: { type: String, required : true},
      email: { type: String, required : true, unique: true},
      password: { type: String, required : true},
      quote : { type: String},
   
  },
  { collection: 'user-data' }
  )
//   create a mongoose model to case your chema
  const model = mongoose.model('UserData', User)







  app.use(cors())
  app.use(express.json())

app.post('/api/register', async (req, res ) => {
   

    try {
         await model.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        })
        
        res.json({status: "ok"})
    }catch (err){
        console.log(err)
        res.json({status: 'error', error: "Duplicate email"})
    }
   
})

app.post('/api/login', async (req, res ) => {
    const user = await model.findOne({
            email: req.body.email,
            password: req.body.password
        })
        
        if (user) {
            console.log(user.email,"welcome")
            
            return res.json({status: 'ok', user: true})
        }else{
            console.log( " you are not registerd")
            return res.json({status: 'error', user: false})
        }
    
})

const port = 1337;
app.listen(port, ()=>{
    console.log("listening at port: ", port)
})  