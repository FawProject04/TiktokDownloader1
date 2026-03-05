const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.post("/api/download", async (req,res)=>{

let url = req.body.url;

try{

let response = await axios.get(`https://api.tiklydown.me/api/download?url=${url}`);

res.json({
video: response.data.video.noWatermark
});

}catch(err){
res.status(500).json({error:"Failed"});
}

});

app.listen(3000, ()=>console.log("Server running"));