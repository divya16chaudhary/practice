const express = require("express");
const user = require("./MOCK_DATA.json");
const app = express();
const port = 8030;
app.get('/api/user',(req,res)=>{
    return res.json(user);
})
app.get("/user",(req,res)=>{
    const html = 
    `<ul>
    ${user.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});
app.listen(port,()=>console.log(`server started at`));
