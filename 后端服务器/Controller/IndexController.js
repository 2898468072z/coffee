module.exports = {
    login:function (req,res){
        var email = req.body.email;
        var password = req.body.password;
        var response = {
            state:0,
            msg:''
        }
        if(email=='admin'){
            if(password=='admin'){
                response.state = 1;
                response.msg = '登陆成功，即将跳转到主页面！！！';
            }else {
                response.state = 0;
                response.msg = '密码错误，请检查后重新登陆！！！';
            }
        }else{
            response.state = -1;
            response.msg = '账号错误！请重新输入！！！';
        }
        res.end(JSON.stringify(response));
    }
}