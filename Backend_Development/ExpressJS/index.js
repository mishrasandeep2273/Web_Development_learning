const express = require("express");
const app = express(); /// this is actually a object

// console.log(app);

let port = 3000 ;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) =>{
//     // console.log(req);
//     console.log("request recieved");
//     res.send("this is basic response"); // we can send response like array, object, string, HTML etc.

// });



app.get("/" , (req,res) =>{
    res.send("hello i am root");
});

// app.get("/apple" , (req,res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange" , (req,res) =>{
//     res.send("you are contacted orange path");
// });

// app.get("/*splat", (req, res) => {
//     res.send("this path does not exist");
// });


// app.post("/" , (req , res) =>{
//     res.send("you send a post request to root");
// })


// app.get("/:username/:id" , (req,res) =>{
//     let {username ,id} = req.params;
//     // console.log(req.params);
//     res.send(`welcome to the page of @${username}.`);
// });


// app.get("/:username/:id" , (req,res) =>{
//     let {username ,id} = req.params;
//     let htmlcode = `<h1>welcome to the page of @${username}</h1>`
//     res.send(htmlcode);
// });


// app.get("/search",(req , res) =>{
//     console.log(req.query);
//     res.send("no resluts");
// })

app.get("/search",(req , res) =>{
   let {q} = req.query;
   if(!q){
    res.send("<h1> nothing searched</h1>");
   }
   res.send(`search results for query : ${q}`);
}) 