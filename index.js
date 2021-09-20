const Express = require('express');
const app = new Express();

require('dotenv').config();

app.get('/',(req,res)=>{
    res.status(200).send("Hello from EC2 Server!!");
})

app.listen(process.env.PORT,()=>{
    console.log("App started");
});
