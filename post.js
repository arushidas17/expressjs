const express = require ("express");
const app = express();
app.use(express.json());
app.post("/user", (req,res)=>{
    const userData=req.body;
    res.send(`user ${userData.name} recieved successfully`);
});
app.listen(3000, () => {
    console.log ("Server is running on port 3000");
});
