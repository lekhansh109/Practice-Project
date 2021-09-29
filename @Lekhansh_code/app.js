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
function noTriples(arr) {
    var count = 0;
    for (let i = 0 ; i < arr.length - 1;i++) {
         if (i+2 <= arr.length -1) {
             if (arr[i] == arr[i+1] && arr[i] == arr[i+2]){
                 return false; 
             } 
          }
  } 
  return true;
}
var arr1=[1,1,2,2,1];
var arr2=[1,1,2,2,2,1];
console.log(noTriples(arr1),noTriples(arr2));


//Q7
function has271(arr) {
    if (arr.length > 2) {
        for (let i = 0; i < arr.length - 2; i++) {
            var first = arr[i];
            if ((first + 5 == arr[i + 1]) && (Math.abs(arr[i + 2] - (first - 1)) <= 2))
                return true;
        }
    }
    return false;
}
var arr1=[1,2,7,1];
var arr2=[1,2,8,1];
console.log(has271(arr1),has271(arr2));

//Q8
function arrayFront9(arr) {
    var len = arr.length;
    if (len > 4){
        len = 4;
     }
    for (let i = 0; i < len; i++) {
        if (arr[i] == 9)
            return true;
    }
    return false;
}
var arr1=[1,2,9,3,4];
var arr2=[1,2,3,4,9];
var arr3=[1,2,3,4,5];
console.log(arrayFront9(arr1),arrayFront9(arr2),arrayFront9(arr3));


//Q9
function countEvens(arr) {
    var evencnt = 0;
    for (let count=0; count < arr.length; count++) {
        if (arr[count] % 2 == 0){
           evencnt++;
        }
    }
      return evencnt;
}
var arr1=[2,1,2,3,4];
var arr2=[2,2,0];
var arr3=[1,3,5];
console.log(countEvens(arr1),countEvens(arr2),countEvens(arr3));    


//Q10
function bigDiff(arr) {
    var min = arr[0];
    var max = arr[0];
    
    for (let i = 0; i < arr.length; i++){
        min = Math.min(min,arr[i]);
        max = Math.max(max,arr[i]);
      }
      return max-min;
}
var arr1=[10,3,5,6];
var arr2=[7,2,10,9];
var arr3=[2,10,7,2];
console.log(bigDiff(arr1),bigDiff(arr2),bigDiff(arr3));


//Q11
function centeredAverage(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        min = Math.min(min,arr[i]);
        max = Math.max(max,arr[i]);
    }
    sum = sum - max - min;
    sum = sum / (arr.length-2);

    return sum;  
}
var arr1=[1, 2, 3, 4, 100];
var arr2=[1, 1, 5, 5, 10, 8, 7];
console.log(centeredAverage(arr1),centeredAverage(arr2));


//Q12
function sum13(arr) {
    var sum =0;
    for (let i = 0;i <arr.length ;i++){
        if (arr[i] != 13){
          sum = sum + arr[i];
        }
        else if (arr[i] == 13 && i < arr.length -1 ) {
          arr[i]=0;
          arr[i+1] =0; 
        }
    }
return sum;

}
var arr1=[1, 2, 2, 1];
var arr2=[1, 2, 2, 1, 13];
console.log(sum13(arr1),sum13(arr2));


//Q13
function sum67(arr) {
      var sum = 0;
      var stop = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 6){
          stop = true;
        }
        if (stop == false){
          sum += arr[i];
        }
        if (arr[i] == 7 && stop == true){
          stop = false;
        }
      }
      return sum;
}
var arr1=[1, 2, 2, 6, 99, 99, 7];
var arr2=[1, 1, 6, 7, 2];
console.log(sum67(arr1),sum67(arr2));   


//Q14
function has22(arr) {
    var found = false;
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] == 2  && arr[i+1] == 2) {
          found = true;
        }
    }    
return found;
    
}
var arr1=[1, 2, 2];
var arr2=[1, 2, 1,2];
console.log(has22(arr1),has22(arr2));   


//Q15
function lucky13(arr) {
    var ans = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1 || arr[i] == 3) {
          ans = false;
        }
    }    
return ans;
    
}
var arr1=[0, 2, 4];
var arr2=[1, 2, 4,];
console.log(lucky13(arr1),lucky13(arr2)); 


//Q16
function sum28(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
          sum = sum + arr[i];
        }
    }
    if(sum == 8){
        return true;
    } 
return false; 
}
var arr1=[2, 3, 2, 2, 4, 2];
var arr2=[2, 3, 2, 2, 4, 2, 2];
console.log(sum28(arr1),sum28(arr2)); 


//Q17
function more14(arr) {
    var count1 = 0;
    var count4 = 0;
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1){
          count1++;
        }
        if (arr[i] == 4){
          count4++;
        }
      }
    if (count1 > count4){
        return true;
    } 
  return false;
}
var arr1=[1,4,1];
var arr2=[1,4,1,4];
console.log(more14(arr1),more14(arr2)); 


//Q18
function fizzArray(n){
    var ans = [];
    for (let i = 0; i < n; i++){
        ans[i] = i;
    }
    return ans;
}
console.log(fizzArray(4),fizzArray(10));

//Q19   
function only14(arr) {
    var ans = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 1 && arr[i] != 4) {
          ans = false;
        }
    }    
return ans;
    
}
var arr1=[1, 4, 1, 4];
var arr2=[1, 4, 2, 4];
console.log(only14(arr1),only14(arr2)); 


//Q20
// function fizzArray2(n){
//     var ans = [];
//     for (let i = 0; i < n; i++){
//         ans[i] = i;
//     }
//     return ans;
// }
// console.log(fizzArray(4),fizzArray(10));

    
    
//Q21
// Given an array of ints, return true if it contains no 1's or it contains no 4's.
function no14(arr) {
  var two = false;
  var four = false;
  for(let i = 0;i <arr.length; i++) {
    if (arr[i] == 1){
      two = true;
     }
    if(arr[i] == 4){
      four = true;
     }
   }

  if(arr.length == 0 || arr.length == 1)
    return true;
  else if (two ==true && four ==true)
    return false;
  else if (two || four)
    return true;
  else
    return false; 
}
console.log(no14([1, 2, 3]),no14([1, 2, 3, 4]),no14([2, 3, 4]));  


//Q22
function isEverywhere(arr,val) {
  var result = true;
  for (let i = 0; i <=arr.length-2;i++){
    if ( arr[i] != val && arr[i+1] != val){
      result = false;
    }
  }
    return result;
}
console.log(isEverywhere([1, 2, 1, 3], 1),isEverywhere([1, 2, 1, 3], 2),isEverywhere([1, 2, 1, 3, 4], 1)); 


//Q23
function either24(arr) {
  var found2 = false;
  var found4 = false;
  for (let i = 0;i < arr.length; i++) {
    if (arr[i] == 2 && i < arr.length-1 && arr.length > 1 && arr[i+1] == 2)
      found2 = true;
    if (arr[i] == 4 && i < arr.length-1 && arr.length > 1 && arr[i+1] == 4)
      found4 = true;
  }

  if (found2 && found4) //if both are present
    return false;
  else if (!found2 && !found4) //if both are not present
    return false;
  else
    return true;
}
console.log(either24([1, 2, 2]),either24([4, 4, 1]),either24([4, 4, 1, 2, 2]));


//Q24
function matchUp(arr1,arr2) {
  var count =0;
  for (let i =0; i <arr1.length ;i++){
    if (Math.abs(arr1[i] - arr2[i]) == 1 || Math.abs(arr1[i] -arr2[i]) == 2 )
       count++;
  }    
    return count;

}
console.log(matchUp([1, 2, 3], [2, 3, 10]),matchUp([1, 2, 3], [2, 3, 5]),matchUp([1, 2, 3], [2, 3, 3]));  


//Q25
