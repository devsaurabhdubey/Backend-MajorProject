
module.exports.profile = function(req,res){
    //return res.end("<h1>The user controller is up and running !!</h1>")
    return res.render("user_profile",{title:'profile'});

}