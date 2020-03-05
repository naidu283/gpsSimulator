
const crc16 = require('node-crc-itu');
module.exports.heartbeatResponse = (req, res)=>
{
    let {heartbeatRequest} = req.body;


// with buffer
  let buff = Buffer.from(heartbeatRequest, 'hex');
  let resultResponse = crc16(buff);
 
   

  res.send({status:true, response: '78 78 0B 23 C0 01 22 04 00 01 00 08 18 72 0D 0A'});

}