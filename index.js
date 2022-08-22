const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const userRoutes = require("./views/userRoutes");

const uri = "mongodb+srv://crissyjv:1995@cluster0.a2j08vq.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log(`DB Connected`)})
.catch(()=>{console.log(`DB Connection Failed`)})

app.use(userRoutes);
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server started running on port ${port}`);
})