const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items =[];
let workitems=[];


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req,res){
  let today = new Date();
  let options ={
    weekday:"long",
    day:"numeric",
    month:"long"
  };

let day = today.toLocaleDateString("en-US",options)

res.render("list",{listTitle:day, newListItems:items});
});

app.post("/",function(req,res){
let item = req.body.newItem;
  if(req.body.list ==="Work List"){
    workitems.push(item)
    res.redirect("/work")
  }
   items.push(item);
   res.redirect("/")
})

app.get("/about",function(req,res){
  res.render("about");
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newListItems:workitems});
});


app.listen(3000, function(){
  console.log("server is running on port 3000")
});
