const express = require('express')
const cors = require('cors')
const dotenv =require('dotenv')

const  path =require( 'path')
const { fileURLToPath } =require("url");
//dotenv configuration
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

//rest objects
const app =express()

//middleware
app.use(cors())
app.use(express.json())

//static file access
app.use(express.static(path.join(__dirname, './client/build')))

//routes
app.use('/api/v1/port',require("./Routes/PortfolioRoute"))
app.use("*",function(req,res){
   res.sendFile(path.join(__dirname,"./client/build/index.html"));
});

//port

const PORT =process.env.PORT||8080



//listen
app.listen(PORT,()=>{
    console.log("server run")
})