const crc16 = require('node-crc-itu');
let logingChecking = true;
let resultResponse;
module.exports.loginResponse = (req, res)=>
{
    
    let {loginRequest} = req.body;


// with buffer
  let buff = Buffer.from(loginRequest, 'hex');
  let ret = crc16(buff);
  console.log(ret); // fb7
   if (ret == 'fb7')
   {
    let response = Buffer.from('78 78 05 01 00 05 9F F8 0D 0A', 'hex');
     resultResponse = crc16(buff);
    logingChecking = true;
   
   }
   else 
   {
    resultResponse = "not valid input";
    logingChecking = false;


   }
   
   res.send({status:logingChecking, loginResponse: resultResponse});
 

}

module.exports.loginCheck = (req, res, next)=>{

    if (logingChecking)
    {
         next();
    }
    else
    {
        res.send({status:false, response:"authentiction failed"});
    }
}