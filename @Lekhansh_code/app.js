// Q1
//params = (2 strings, str1 and str2), return the number of the positions where they contain the same length 2 substring.
// ex."xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.
function stringMatch(str1,str2){
    var len = Math.min(str1.length, str2.length);
    var count = 0;
  
      for(let i = 0; i < len-1; i++){
         var s1 = str1.substring(i, i+2);   //to get substring of length of 2
         var s2 = str2.substring(i, i+2);
         if (s1 == s2)                       //to check both substring are equal are not
           count++; 
      }
      return count;
}
console.log(stringMatch("xxcaazz", "xxbaaz") ,stringMatch("abc", "abc") ,stringMatch("abc", "axc") );


//Q2
// params=(string), return a version where all the "x" have been removed.
//  Except an "x" at the very start or end should not be removed.
function stringX(str){
    var finalStr = "";
    var len = str.length;
    for (let i = 0; i < len ; i++){
        var temp = str.charAt(i);                //to get character at position i 
        if (!(i > 0 && i < len - 1 && temp == 'x'))   //to check char is not x
            finalStr = finalStr + temp;
  }
  
  return finalStr; 
}
console.log(  stringX("xxHxix"),stringX("abxxxcd"),stringX("xabxxxcdx") );

//Q3
//params = (string), return a string made of the chars at indexes 0,1, 4,5, 8,9 ...so "kittens" yields "kien".
function altPairs(str){
    var finalstr = "";
    for (let i=0; i<str.length; i= i+4) {    //to get mutiple of 4
       var end = i + 2;                     // to hold next index adjacent to multiple of 4
       if (end > str.length) {
        end = str.length;      
        }
    finalstr = finalstr + str.substring(i, end);
  }

  return finalstr;
}
console.log(altPairs("kitten"),altPairs("Chocolate"),altPairs("CodingHorror") );


//Q4
// params=(string), return a string where all the "yak" are removed, but the "a" can be any char. 
// The "yak" strings will not overlap.
function stringYak(str) {
      var finalstr = "";
      for (let i=0; i<str.length; i++) {
        if (i+2<str.length && str.charAt(i)=='y' && str.charAt(i+2)=='k') {  //to check string has "yak"
             i =  i + 2;                                     //skip "yak"
            } 
        else {
            finalstr = finalstr + str.charAt(i);
        }   
    }
           
      return finalstr;
}   
console.log(stringYak("yakpak"),stringYak("pakyak"),stringYak("yak123ya") );


//Q5
// params=(array), return the number of times that two 6's are next to each other in the array.
// Also count instances where the second "6" is actually a 7.
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
//params=(array),let triple is a value appearing 3 times in a row in the array.
// Return true if the array does not contain any triples.
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
//params=(array), return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5,followed
//by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.
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
//params=(array),return true if one of the first 4 elements in the array is a 9.Array length may be less than 4.
function arrayFront9(arr) {
    var len = arr.length;   
    if (len > 4){
        len = 4;        //since we have to check first 4 elements
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
// params=(array),Return the number of even ints in the given array.
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
// params=(array), return the difference between the largest and smallest values in the array.
function bigDiff(arr) {
    var min = arr[0];
    var max = arr[0];
    
    for (let i = 0; i < arr.length; i++){
        min = Math.min(min,arr[i]);      //Math.min(v1, v2) returns the smaller value of two 
        max = Math.max(max,arr[i]);      //Math.max(v1, v2) returns the larger value of two
      }
      return max-min;
}
var arr1=[10,3,5,6];
var arr2=[7,2,10,9];
var arr3=[2,10,7,2];
console.log(bigDiff(arr1),bigDiff(arr2),bigDiff(arr3));


//Q11
// params=(array),Return the "centered" average of an array , which is the mean average of the values,except
// ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, 
// ignore just one copy, and likewise for the largest value.
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
// params = (array),Return the sum of the numbers in the array, returning 0 for an empty array.Except number
// 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
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
// params=(array),return the sum of the numbers in the array, except ignore sections of numbers starting with
// 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
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
// params=(array), return true if the array contains a 2 next to a 2 somewhere.
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
// params=(array),return true if the array contains no 1's and no 3's.
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
// params = (array), return true if the sum of all the 2's in the array is exactly 8.
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
// params = (array), return true if the number of 1's is greater than the number of 4's
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
// params = (number = n), create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1.
// The given n may be 0, in which case just return a length 0 array.
function fizzArray(n){
    var ans = [];
    for (let i = 0; i < n; i++){
        ans[i] = i;
    }
    return ans;
}
console.log(fizzArray(4),fizzArray(10));

//Q19 
// params = (array), return true if every element is a 1 or a 4.  
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
// params = (array), return true if it contains no 1's or it contains no 4's.
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
// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array,
// at least one of the pair is that value. Return true if the given value is everywhere in the array
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
// params=(array), return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.
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
// params=(arrays arr1 and arr2 of the same length), for every element in arr1, consider the corresponding 
// element in arr2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.
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
// Given an array of ints, return true if the array contains
// two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.
//p=(array is passed)
function has77(arr) {
  var result = false;
  for (let i = 0; i < arr.length-1; i++){
    if ((arr[i] == 7 && arr[i+1] == 7)){  // 7 and 7 are adjacent
       result = true;
     }  
  }    
  for (let i = 0; i < arr.length-2; i++){ 
    if ((arr[i] == 7 && arr[i+2] == 7)){  //both 7 is separated by 1 element  
      result = true;
    } 
  }
  return result;   
}
console.log(has77([1, 7, 7]),has77([1, 7, 1, 7]),has77([1, 7, 1, 1, 7]));


//Q26
//Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.
//p=(array)
function has12(arr) {
  var foundOne = false;
  var foundOneTwo = false;

  arr.forEach(element => {
    if (element == 1){
      foundOne = true;
    }
    if (element == 2 && foundOne){
      foundOneTwo = true;
    }
  });
  return foundOneTwo;

}
console.log(has12([1, 3, 2]),has12([3, 1, 2]),has12([3, 1, 4, 5, 2]));


//Q27
// Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.
function modThree(arr) {
  var result = false;
  for (let i = 0;i<arr.length-2;i++)
    if( (arr[i] % 2 == 0 && arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0)|| (!(arr[i] % 2 == 0) && !(arr[i+1] % 2 == 0) && !(arr[i+2] % 2 == 0))){
      result = true;
    }   
return result;

}
console.log(modThree([2, 1, 3, 5]),modThree([2, 1, 2, 5]),modThree([2, 4, 2, 5]));


//Q28
// Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.
function haveThree(arr) {
  var count = 0;
  var found = false;
  
  arr.forEach(element => {
    if (element != 3)
      found = false;
    if (element == 3 && found == true)
      return false;
    if (element == 3 && found == false) {
      found = true;
      count++;
    }
  });
  
  if (count == 3)
    return true;
  else
    return false;
}
console.log(haveThree([3, 1, 3, 1, 3]),haveThree([3, 1, 3, 3]),haveThree([3, 4, 3, 3, 4]));


//Q29
// params = (array), return true if every 2 that appears in the array is next to another 2.
function twoTwo(arr) {
  var index =0;
  for (let i=0; i<(arr.length); i++){
    if(arr[i]==2){
      i++;
     if(!(i<(arr.length)) || arr[i] !=2){
       return false;
     }
     while(i<arr.length && arr[i] ==2){
       i++;
     }
    }
  }
  return true;

}
console.log(twoTwo([4, 2, 2, 3]),twoTwo([2, 2, 4]),twoTwo([2, 2, 4, 2]));  
  

//Q30
// Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, 
// the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.
function sameEnds(arr,len) {
  var foo = true;
  for (let i = 0; i < len; i++) {
    if (arr[i] == arr[arr.length-len+i]){
      foo = true;
    }
    else{
      foo = false;
    }
  } 
return foo;

}
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 1),sameEnds([5, 6, 45, 99, 13, 5, 6], 2),sameEnds([5, 6, 45, 99, 13, 5, 6], 3));  


//Q31
// Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
function tripleUp(arr){
  for(let i=0; i<arr.length-2; i++){
    if( (arr[i+1]==arr[i]+1) && (arr[i+2]==arr[i]+2)){
      return true;
    }
  }
  return false;
}
console.log(tripleUp([1, 4, 5, 6, 2]),tripleUp([1, 2, 3]),tripleUp([1, 2, 4]));


//Q32
// Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}.
//The end number will be greater or equal to the start number. Note that a length-0 array is valid. 
function fizzArray3(start,end) {
  var n = end - start;
  var result = [];
  
  for (let i = 0; i < n; i++){
    result[i] = start++;
  }
return result;
  
}
console.log(fizzArray3(5, 10),fizzArray3(11, 18),fizzArray3(1, 3) ); 


//Q33
// Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. 
// You may modify and return the given array, or return a new array.
function shiftLeft(arr) { 
  var foo = [];
  if (arr.length == 0)   //if array is empty
    return foo;
  
  for (let i = 0; i < arr.length-1; i++) {  //shifting all elements one by one
      foo[i] = arr[i+1];
  }
  foo[arr.length-1] = arr[0];   //placing first element at last
return foo;

}
console.log(shiftLeft([6, 2, 5, 3]),shiftLeft([1, 2]),shiftLeft([1]));


//Q34
// For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, 
// until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
function tenRun(arr) {
  for(let i = 0; i < arr.length; i++){
    if ( arr[i] % 10 == 0){     //to find first multiple of 10
      for (let j = i +1; j < arr.length && !(arr[j] % 10 == 0) ; j++){ 
        arr[j] = arr[i];
      }
    }
  }
return arr;

}
console.log(tenRun([2, 10, 3, 4, 20, 5]),tenRun([10, 1, 20, 2]),tenRun([10, 1, 9, 20]) ); 


//Q35
// Given a non-empty array of ints, return a new array containing the elements from the original array that 
// come before the first 4 in the original array. The original array will contain at least one 4.
function pre4(arr){
  var finalArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] == 4){
      break;
    }
    finalArr[i] = arr[i];
  }
  return finalArr;
}
console.log(pre4([1, 2, 4, 1]),pre4([3, 1, 4]),pre4([1, 4, 4]) );


//Q36
// We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. 
// Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.
function notAlone(arr,val) {
  for (let i= 1;i<arr.length -1;i++){
    if (arr[i] == val){
      if (arr[i-1] != arr[i] && arr[i+1] != arr[i]){
        if(arr[i+1] > arr[i-1]){
          arr[i] = arr[i+1];
        }
        else if(arr[i+1] < arr[i-1]){
          arr[i] = arr[i-1];
        }
      }
    }
  }
return arr;

} 
console.log(notAlone([1, 2, 3], 2),notAlone([1, 2, 3, 2, 5, 2], 2),notAlone([3, 4], 3) );


//Q37
// Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. 
// The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. return the array.
function zeroFront(arr) {
  var count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr[i] = arr[count];   // swapping of 0 with other taking place
      arr[count] = 0;
      count++;
    }
  }
return arr;
} 
console.log(zeroFront([1, 0, 0, 1]),zeroFront([0, 1, 1, 0, 1]),zeroFront([1, 0]) );


//Q38
// Return a version of the given array where all the 10's have been removed. The remaining elements should shift 
// left towards the start of the array as needed, and the empty spaces a the end of the array should be 0.
// So {1, 10, 10, 2} yields {1, 2, 0, 0}. return array.
function withoutTen(arr) {
  var result = [];
  var j = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 10) { 
      } 
    else {                        //Copy all elements in another array without ten
      result[j] = arr[i];
      j++;
    }
  }

  for(let i = j; i < arr.length; i++) {
    result[i] = 0;                       // Placing 0 for element 10
  }
return result;

}
console.log(withoutTen([1, 10, 10, 2]),withoutTen([10, 2, 10]),withoutTen([1, 99, 10]) );


//Q39
// Return a version of the given array where each zero value in the array is replaced by the largest odd value to 
// the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.
function zeroMax(arr){
  var max = 0;
  for (var j =0; j < arr.length-1; j++){
    if (arr[j] == 0){
      for (let i = j + 1; i <=arr.length -1;i++){
        if ( arr[i] > max && arr[i] % 2 == 1 ){      // to find next maximum odd no.
          max = arr[i];
        } 
      }
      arr[j] = max;
      max = 0;
    }
  }
 return arr;
}
console.log(zeroMax([0, 5, 0, 3]),zeroMax([0, 4, 0, 3]),zeroMax([0, 1, 0]) );


//Q40
// params =(array),Return an array that contains the exact same numbers as the given array, but rearranged so  
// that all even numbers come before all the odd numbers.Other than that, the numbers can be in any order.
function evenOdd(arr) {
  var evenCount = 0;
  var oddCount = arr.length-1;
  var finalarr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {           //Placing even no. first
      finalarr[evenCount] = arr[i];
      evenCount++;
    }
    else {
      finalarr[oddCount] = arr[i];    // Placing odd no. at last
      oddCount--;
    }
  }
  return finalarr;

}
console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]),evenOdd([3, 3, 2]),evenOdd([2, 2, 2]) );  