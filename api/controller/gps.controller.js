
const crc16 = require('node-crc-itu');
const  converter = require('hex2dec');

const fs = require('fs');
// const fs = require('fs');
const path = require('path')
module.exports.gpsResponse = (req, res)=>
{
    let {gpsRequest} = req.body;

    let convertHex = gpsRequest.split(" ");
   
   // console.log("length of packet"+packetArray.length);
// // with buffer
//   let buff = Buffer.from(gpsRequest, 'hex');
//   let resultResponse = crc16(buff);

     console.log(convertHex);
    let start_bit = convertHex[0] + convertHex[1]; //2
    let packet_length = convertHex[2];//1
    let protocal_number = convertHex[3];//1
    let year = convertHex[4];
    let month = convertHex[5];
    let day = convertHex[6];
    let hour = convertHex[7];
    let minute =convertHex[8];
    let second = convertHex[9];
    let satellites = convertHex[10];
    let latitude = convertHex[11]+' '+convertHex[12]+' '+convertHex[13]+' '+convertHex[14];
    let longitude = convertHex[15]+convertHex[16]+convertHex[17]+convertHex[18];


    var buff1 = Buffer.from(latitude, 'hex');
    var hex_latitude = crc16(buff1);

    var buff2 = Buffer.from(longitude, 'hex');
    var hex_longitude = crc16(buff2);


   
    console.log("hex_latitude"+latitude);
    console.log("hex_longitude"+longitude);
   
 
var decimalLatitude = converter.hexToDec(hex_latitude); 
var decimalLongitude = converter.hexToDec(hex_longitude); 

   console.log("dec_latitude"+decimalLatitude);
   console.log("dec_logitude"+decimalLongitude);
   let lines1 = fs.readFileSync( './count.txt', 'utf-8');
   let countOfLines1  =lines1.toString().trim().split('\n');
   let line_count = countOfLines1.length;
   fs.appendFileSync('./count.txt', '\n'+line_count+1)
 let real_latitude = (decimalLatitude/1800000)+line_count;
 let real_longitude = (decimalLongitude/1800000)+line_count;

 console.log('latitude:'+ real_latitude);
 console.log('longitude:'+real_longitude);

 let location_information = "latitude:"+real_latitude+",longitude:"+real_longitude;

 

 let lines = fs.readFileSync( './location.txt', 'utf-8');
 let countOfLines  =lines.toString().trim().split('\n');
 fs.appendFileSync('./location.txt', '\n'+location_information)
 
 

   

  res.send({status:true, response: location_information});

}