const exp=require('express');
const hbs= require('hbs');

var app = exp();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(exp.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

app.get('/',(req,res)=>{
    res.send("Hi Suknath , welcome to the node world");

});
app.get('/help',(req,res)=>{
    res.render('about.hbs',{ 
        pageTitle:'Sukanth The Great',
        currentYear:new Date().getFullYear()
    });

 });

 app.get('/home', (req, res)=>{
    res.render('home.hbs',{
        pageTitle:'Sukanth Home',
        welcomeMessage:'Hi Sukanth , please Welcome',
        currentYear:new Date().getFullYear()
    });

});
app.listen(3000);