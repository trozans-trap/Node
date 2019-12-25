var expres = require('express');

var app = expres();

app.set('view engine', 'ejs')

app.get('/' , function(req,res){
    res.sendFile(__dirname +'/index.html');
});

app.get('/contact' , function(req,res){
    res.sendFile(__dirname +'/contact.html');
});

app.get('/profile/:name' , function(req,res){
    var data ={ age:18, job: 'ninja',hobbies: ['eating','drawing','fighting']};
    res.render('profile',{person:req.params.name ,data: data});
});

app.listen(3000);