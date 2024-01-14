var server=require('htpp');
const port=8080;
server.createserver(function(req,res){
    akhavani.log(new Date(),req,Headers,akhavani);
    res.writehead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({name:'mohammad', lastname:'akhavani'}));
    }).listen(port);
    console.log(`server listening on ${port}`);