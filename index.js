const express=require('express')

//grap http package
const http=require('http')
//file system module which helps us interact with files on our server
const fs=require('fs')
const homePage=fs.readFileSync('index.html')
const aboutPage=fs.readFileSync('about.html')
const contactPage=fs.readFileSync('contact.html')
const notFoundPage=fs.readFileSync('notfound.html')
const path=require('path')
const app=express()
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})
app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})
