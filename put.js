const express= require ("express");
const app= express();
app.use(express.json());
app.put("/users/:id" , (req,res)=> {
    const userId= req.params.id;
    const newName= req.body.name;
    res.send (`user ${userId} updated to ${newName}`);
});
app.listen(3000, () => {
    console.log("server is running on port 3000");

});
