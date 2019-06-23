//function1
function reverseString(message){
	var rever_message="";
	for(var i=message.length-1;i>=0;i--){
		rever_message=rever_message+message[i];
	}
	return rever_message;
}

//function2
function palindrome(message){
	var flag=1;
	for(var i=0;i<message.length/2;i++){
		if(message[i]!=message[message.length-1-i]){
            flag=0;
			return false;
			break;
		}
	}
	if(flag==1)
		return true;
}

//function3
function alphabetSort(message){
	var array_str=message.split("");
	var a=[];
	a=array_str.sort();
	console.log(a);
}

//function4
function countWords(message){
  var arr=message.split("");//将字符串转换成数组
  var res={};
  for(var i=0,l=arr.length;i<l;i++){
		if (!res[arr[i]]) {
			res[arr[i]]=1;
		}
  }
  var keys=Object.keys(res);
  return keys.length

}
