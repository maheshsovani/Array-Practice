const counter=function(){
  let count =0;
  return function(){
    return count++;
  }
}
let serialNumber = counter();

const justify=function(times){
 let  spaces = new Array(times).fill(" ").join("");
    return spaces;
}

const testLog = function (args,expectedOutput,actualOutput,message){
  let output="";
  output = output + serialNumber() + "|";
  output = output + message + justify(35-message.length) + "|";
  output = output + args + justify(35-args.toString().length) + "|";
  output = output + expectedOutput + justify(35-expectedOutput.toString().length)+ "|";
  output = output + actualOutput + justify(35-actualOutput.toString().length)+ "|";
  console.log(output);
}
testLog("Test","Input","ExpectedOutput","actualOutput")  
testLog([2,3],[24124414],32,"hii")  
testLog([220000,3],[24124414],3200000,"dfrdzfgtyhjkl;.vbnm,.")  
