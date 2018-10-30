//1,引入express
var express = require('express');
var app = express();
//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
//5,设置静态文件
app.use(express.static('public'));
//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/index', function(req,res){
    res.render('index',{})
});
app.get('/shop', function(req,res){
    res.render('shop',{})
});
app.get('/amsterdam', function(req,res){
    res.render('amsterdam',{})
});
app.get('/bay_area', function(req,res){
    res.render('bay_area',{})
});
app.get('/bluebottlecoffee', function(req,res){
    res.render('bluebottlecoffee',{})
});
app.get('/boston', function(req,res){
    res.render('boston',{})
});
app.get('/careers', function(req,res){
    res.render('careers',{})
});
app.get('/coffee-match', function(req,res){
    res.render('coffee-match',{})
});
app.get('/contact', function(req,res){
    res.render('contact',{})
});
app.get('/dc', function(req,res){
    res.render('dc',{})
});
app.get('/events', function(req,res){
    res.render('events',{})
});
app.get('/frequency', function(req,res){
    res.render('frequency',{})
});
app.get('/help', function(req,res){
    res.render('help',{})
});
app.get('/kobe', function(req,res){
    res.render('kobe',{})
});
app.get('/kyoto', function(req,res){
    res.render('kyoto',{})
});
app.get('/los_angeles', function(req,res){
    res.render('los_angeles',{})
});
app.get('/miami', function(req,res){
    res.render('miami',{})
});
app.get('/new_york', function(req,res){
    res.render('new_york',{})
});
app.get('/new', function(req,res){
    res.render('new',{})
});
app.get('/our-coffee', function(req,res){
    res.render('our-coffee',{})
});
app.get('/our-story', function(req,res){
    res.render('our-story',{})
});
app.get('/preparation-guides', function(req,res){
    res.render('preparation-guides',{})
});
app.get('/retailer', function(req,res){
    res.render('retailer',{})
});
app.get('/tokyo', function(req,res){
    res.render('tokyo',{})
});
app.get('/sign_in', function(req,res){
    res.render('sign_in',{})
});

var indexController = require('./Controller/IndexController');
app.post('/login',urlencodedParser,indexController.login);

app.listen(9999, function () {
    console.log('Server is running...');
});