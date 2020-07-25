 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */
 const path = require("path");
 const express = require("express");
 const app = express();
 const publicPath = path.join(__dirname,'..','public');
 const port = process.env.PORT || 3000;
 
 app.use(express.static(publicPath));
 app.get('*',(req,res) => {
      res.sendFile(path.join(publicPath,'index.html'));
 });
 app.listen(port,() => {
      console.log("server is up");
 });
