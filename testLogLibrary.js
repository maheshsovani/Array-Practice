const counter = function(){
  let count = 1;
  return function(){
    return count++;
  }
}
let serialNumber = counter();

const justify=function(times,message){
 let requiredSpaces = times - message.length
 let  spaces = new Array(requiredSpaces).fill(" ").join("");
    return message+spaces;
}

const testLog = function (args,expectedOutput,actualOutput,message){
  let output="";
  output = output + serialNumber() + "|";
  output = output + justify(35,JSON.stringify(message)) + "|";
  output = output + justify(35,JSON.stringify(args)) + "|";
  output = output + justify(35 ,JSON.stringify(expectedOutput))+ "|";
  output = output + justify(35 ,JSON.stringify(actualOutput))+ "|";
  console.log(output);
  console.log(new Array(144).fill(String.fromCharCode(9472)).join(""));
}
testLog([2,3],[24124414],32,"hii")  
testLog([220000,3],[24124414],3200000,"dfrdzfgtyhjkl;.vbnm,.")  
exports.testLog = testLog;
