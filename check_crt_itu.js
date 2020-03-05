var crc16 = require('node-crc-itu');

// with string
var ret = crc16('78 78 11 01 03 51 60 80 80 77 92 88 22 03 32 01 01 AA 53 36 0D 0A');
console.log(ret); // 7bf9

// with buffer
var buff = Buffer.from('78 78 11 01 03 51 60 80 80 77 92 88 22 03 32 01 01 AA 53 36 0D 0A', 'hex');
var ret = crc16(buff);
console.log(ret); // 7bf9

// with string without encoding output
var ret = crc16('78 78 11 01 03 51 60 80 80 77 92 88 22 03 32 01 01 AA 53 36 0D 0A', { encodingOutput: false });

var ret1 = crc16('0x0C 0x46 0x58 0x60');
console.log(ret1.toString(16)); // 7bf9



var buff2 = Buffer.from('0C 46 08 60', 'hex');
var ret2 = crc16(buff2);
console.log(ret2);

var converter = require('hex2dec');
 
var dec = converter.hexToDec('0x0c0x46'); 
console.log(dec);
var lat = (dec/1800000);
console.log(lat);


// var location_number = "78 78 
// 22 
// 22 
// 0F 0C 1D 02 33 05
//  C9
// 02 7A C8 18
// 0C 46 58 60 
//  00 14
// 00 01 CC 00 
//     28 7D 00 1F 71 00 00 01 00 08 20 86 0D 0A"

const fs = require('fs');
let lines = fs.readFileSync( './location.txt', 'utf-8');
let countOfLines  =lines.toString().trim().split('\n');
fs.appendFileSync('./location.txt', '\n'+'india')
