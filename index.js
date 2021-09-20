const Express = require('express');
const app = new Express();

require('dotenv').config();

app.get('/',(req,res)=>{
    res.status(200).send("Hello from EC2 Server!!");
})

app.listen(3000,()=>{
    console.log("App started on port 3000");
});
