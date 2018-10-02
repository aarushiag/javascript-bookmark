var tessel=require('tessel');
var port=tessel.port.A;
var slaveAddress=0xDE;
var i2c=new port.I2C(slaveAddress);
var bytesToSend=[0xDE,0xAD,0xBE,0xEF];
var numBytesToRead=4;
i2c.transfer(new Buffer(bytesToSend),numBytesToRead,function(error,dataReceived){
	console.log('Buffer returned by I2C Slave Device ('+slaveAddress.toString(16)+'):',dataReceived);
});
