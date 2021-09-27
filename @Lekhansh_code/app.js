// Q1
function stringMatch(str1,str2){
    var len = Math.min(str1.length, str2.length);
    var count = 0;
  
      for(let i = 0; i < len-1; i++){
         var s1 = str1.substring(i, i+2);
         var s2 = str2.substring(i, i+2);
         if (s1 == s2)
           count++; 
      }
      return count;
}
console.log(stringMatch("xxcaazz", "xxbaaz") ,stringMatch("abc", "abc") ,stringMatch("abc", "axc") );


//Q2
function stringX(str){
    var finalStr = "";
    var len = str.length;
    for (let i = 0; i < len ; i++){
        var temp = str.charAt(i);
        if (!(i > 0 && i < len - 1 && temp == 'x'))
            finalStr = finalStr + temp;
  }
  
  return finalStr; 
}
console.log(  stringX("xxHxix"),stringX("abxxxcd"),stringX("xabxxxcdx") );

//Q3
function altPairs(str){
    var finalstr = "";
    for (let i=0; i<str.length; i= i+4) {
       var end = i + 2;
       if (end > str.length) {
        end = str.length;      
        }
    finalstr = finalstr + str.substring(i, end);
  }

  return finalstr;
}
console.log(altPairs("kitten"),altPairs("Chocolate"),altPairs("CodingHorror") );


//Q4
function stringYak(str) {
      var finalstr = "";
      for (let i=0; i<str.length; i++) {
        if (i+2<str.length && str.charAt(i)=='y' && str.charAt(i+2)=='k') {
             i =  i + 2;
            } 
        else {
            finalstr = finalstr + str.charAt(i);
        }   
    }
           
      return finalstr;
}   
console.log(stringYak("yakpak"),stringYak("pakyak"),stringYak("yak123ya") );


//Q5
function array667(arr){
    var count=0;
    for (let i = 0 ; i < arr.length-1;i++) {
        if (arr[i] == 6){
            if (arr[i+1] == 6 || arr[i+1] == 7){
                count++;         
            }
        }
    }
        return count;   
}
var arr1=[6,6,2];
var arr2=[6,7,2,6];
console.log(array667(arr1),array667(arr2));

//Q6
