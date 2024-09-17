// Q1

//Method 1
function sameSubstring(s1, s2){
    var length = s1.length<=s2.length ? s1.length : s2.length;
    var count = 0;
    for(let i=0; i<length-1; i++){
        if(s1[i] == s2[i] && s1[i+1] == s2[i+1])
            count++;
    }
    return count;
}
console.log("Q1(method 1): ", sameSubstring("xxcaazz", "xxbaaz"), sameSubstring("abc", "abc"), sameSubstring("abc", "axc"));


 //Q(1) Method 2:

function sameSubstring(s1, s2){
    var length = s1.length<=s2.length ? s1.length : s2.length;
    var count = 0;
    for(let i=0; i<length-1; i++){
        let sub1 = s1.substring(i, i+2);
        let sub2 = s2.substring(i,i+2);

        if(sub1 == sub2)
            count++;
    }
    return count;
}
console.log("Q1(method2): ", sameSubstring("xxcaazz", "xxbaaz"), sameSubstring("abc", "abc"), sameSubstring("abc", "axc"));


//Q2
function removeX(str){
    var len = str.length;
    if(len<=2) 
        return str;

    const start= str.charAt(0) ;
    const end= str.charAt(len-1);
    substr = str.substring(1,len-1);            // substring obtained after removing 1st and last element from str

    const regEx = new RegExp("x", "g");
    str = substr.replace(regEx,"");             // for replacing all the occurences of 'x' in the substr with ""

    return start + str + end;
    
}

console.log("Q2: ", removeX("xxHxix"),removeX("abxxxcd"),removeX("xabxxxcdx") );



//Q3
function charPairs(str){
    var result = "";
    var len = str.length;
    for(let i=0; i<len; i+=4){
        if(i%4 == 0){
            result += str[i];

            if(i+1 <len)
                result += str[i+1];
        }
    }
    return result;
}
console.log("Q3: ", charPairs("kitten"),charPairs("Chocolate"),charPairs("CodingHorror") );



//Q4
function remove_yak(str){
    var len = str.length;
    if(len<=3) 
        return str;

    const regEx = new RegExp("yak", "g");
    str = str.replace(regEx,"");             // for replacing all the occurences of 'yak' in the substr with ""

    return str;
    
}
console.log("Q4: ", remove_yak("yakpak"),remove_yak("pakyak"),remove_yak("yak123ya") );



//Q5
function adjacent67(arr){
    var count = 0;
    var len = arr.length;
    for (let i = 0 ; i < len-1 ; i++) {
        if (arr[i] == 6 && (arr[i+1]==6 || arr[i+1] == 7))
            count++;             
        }
        return count;   
}
console.log("Q5: ", adjacent67([6,6,2]),adjacent67([6,7,2,6,6]));



//Q6
function triples(arr){
    var flag = 0;
    for(let i=0; i<arr.length-2; i++){
        if(arr[i]==arr[i+1] && arr[i+1] == arr[i+2]){
            flag = 1;
            break;
        }
    }
    if(flag == 0)
        return true;
    else
    return false;
}
console.log("Q6: ",triples([6,2,2,2,1]), triples([1, 1, 2, 2, 1]), triples([1,1,1,2,2,2,1]));



//Q7
function pattern_271(arr) {
    if (arr.length > 2) {
        for (let i = 0; i < arr.length - 2; i++) {
            if ((arr[i+1] == arr[i]+5) && (Math.abs((arr[i] - arr[i+2]) - arr[i + 2]) <= 2))
                return true;
        }
    }
    return false;
}
console.log("Q7: ", pattern_271([1,2,7,1]),pattern_271([1,2,8,1]), pattern_271([2,7,1]));



//Q8
function arrayFront9(arr) {
    var len = arr.length;
    for (let i = 0; i < len && i<4; i++) {
        if (arr[i] == 9)
            return true;
    }
    return false;
}
console.log("Q8: ", arrayFront9([1,2,9,3,4]),arrayFront9([1,2,3,4,9]),arrayFront9([1,2,3,4,5]));


//Q9
function evenInts(arr) {
    var count = 0;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] % 2 == 0){
           count++;
        }
    }
      return count;
}
console.log("Q9: ", evenInts([2,1,2,3,4]),evenInts([2,1,2,3,4]),evenInts([1,3,5]), evenInts([1,2,2,8,12,13,18])); 


//Q10
function bigDiff(arr) {    
    var min = Math.min(...arr);             // Using destructuring assignment
    var max = Math.max(...arr);  
      return max-min;
}
console.log("Q10: ", bigDiff([10,3,5,6]),bigDiff([7,2,10,9]),bigDiff([2,10,7,2]));



//Q11
const add = arr => arr.reduce((a, b) => a + b, 0);         //arrow function for sum of all elements of an array
function centeredAverage(arr) {
    var sum = add(arr);
    var min = Math.min(...arr);             // Using destructuring assignment
    var max = Math.max(...arr); 
    sum = sum - max - min;
    sum = Math.floor(sum / (arr.length-2));

    return sum;  
}
console.log("Q11: ", centeredAverage([1, 2, 3, 4, 100]), centeredAverage([1, 1, 5, 5, 10, 8, 7]), centeredAverage([-10, -4, -2, -4, -2, 0]));

//Q12: Return the sum of the numbers in the array, returning 0 for an empty array. 
//     Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.
function sum_except13(arr){
    var req_sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 13){
            if(i+1 <arr.length)
                i++;
            continue;
        }
        req_sum += arr[i];
    }
    return req_sum;
}
console.log("Q12: ", sum_except13([1, 2, 2, 1]), sum_except13([1, 1, 2]), sum_except13([1, 2, 2, 1, 13,7]), sum_except13([1, 5, 2, 1, 13]));



//Q13: Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 
//     (every 6 will be followed by at least one 7). Return 0 for no numbers.
function sum_except_6_to_7(arr){
    var req_sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 6){
            let j= i+1;
            while(arr[j] != 7){
                j++;
            }
            i = j;
        }
        else
            req_sum += arr[i];
        
    }
    return req_sum;
}
console.log("Q13: ", sum_except_6_to_7([1, 2, 2]), sum_except_6_to_7([1, 2, 2, 6, 99, 99, 7]), sum_except_6_to_7([1, 1, 6, 7, 2]));


//Q14: Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.
function adjacent2(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] == 2 && arr[i+1] == 2)
            return true;
    }
    return false;
}
console.log("Q14: ", adjacent2([1,2,2]),  adjacent2([1,2,1,2]),  adjacent2([2,1,2]),  adjacent2([1,5,4,2,6,2,2,3]));


//Q15: Given an array of ints, return true if the array contains no 1's and no 3's.
function lucky13(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1 || arr[i] == 3)
            return false;
    }
    return true;
}
console.log("Q15: ", lucky13([0, 2, 4]), lucky13([1, 2, 3]), lucky13([1, 2, 4]));


//Q16: Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.
function sum28(arr){
    var sum_2 = 0;
    arr.forEach(element => {
        if(sum_2 >8)
            return false;
        if(element == 2)
            sum_2 += element;
    });
    if(sum_2 == 8)
        return true;
    else
        return false;
}
console.log("Q16: ", sum28([2, 3, 2, 2, 4, 2]), sum28([2, 3, 2, 2, 4, 2, 2]), sum28([1, 2, 3, 4]));




//Q17: Given an array of ints, return true if the number of 1's is greater than the number of 4's
function more14(arr) {
    var count1 = 0;
    var count4 = 0;
 
    arr.forEach(element => {
        if (element == 1){
            count1++;
          }
          if (element == 4){
            count4++;
          }
    });
    if (count1 > count4)
        return true;
    else
    return false;
}
console.log("Q17: ", more14([1, 4, 1]), more14([1, 4, 1, 4]), more14([1, 1]));


//Q18: Given a number n, create and return a new int array of length n, containing the numbers 0, 1, 2, ... n-1. 
//  The given n may be 0, in which case just return a length 0 array. 
//  You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. 
function fizzArray(n) {
    arr = new Array(n);
    
    for(let i = 0; i < n; i++)
        arr[i] = i;
              
    return arr;
}
console.log("Q18: ", fizzArray(4),fizzArray(10));


//Q19: Given an array of ints, return true if every element is a 1 or a 4.
function only14(arr){ 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 1 && arr[i] != 4) {
          return false;
        }
    }
    return true;
    
}
console.log("Q19: ",only14([1, 4, 1, 4]), only14([1, 4, 2, 4]), only14([1, 1]));


// Q20: Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1.
//  N may be 0, in which case just return a length 0 array. Note: String.valueOf(xxx) will make the String form of most types. The syntax to make a new string array is: new String[desired_length]  
function stringArray(n) {
    arr = new Array(n);
    
    for(let i = 0; i < n; i++)
        arr[i] = i.toString();
              
    return arr;
}
console.log("Q20: ", stringArray(4),stringArray(10));



// Q21: Given an array of ints, return true if it contains no 1's or it contains no 4's.
function no_1_4(arr){
    var present_4 = false;
    var present_1 = false;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 1)
            present_1 = true;
        if(arr[i] == 4)
            present_4 = true;
    }
    if(!present_1 || !present_4)
        return true;
    else return false;
}
console.log("Q21: ", no_1_4([1, 2, 3]), no_1_4([1, 2, 3, 4]), no_1_4([2, 3, 4]));




// Q22: We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, 
// at least one of the pair is that value. Return true if the given value is everywhere in the array.
function isEverywhere(arr,value) {
    for (let i = 0; i <arr.length-1; i++){
      if ( arr[i] != value && arr[i+1] != value){
        return false;
      }
    }
      return true;
  }
  console.log("Q22: ", isEverywhere([1, 2, 1, 3], 1),isEverywhere([1, 2, 1, 3], 2),isEverywhere([1, 2, 1, 3, 4], 1)); 


  //Q23: Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.
  function adjacent4(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] == 4 && arr[i+1] == 4)
            return true;
    }
    return false;
  }

  function either_adjacent_24(arr){
    if((adjacent2(arr) || adjacent4(arr)) && !(adjacent2(arr) && adjacent4(arr)))       //adjacent2(arr) function is already defined in question 14. 
        return true;
    else
        return false;
  }
  console.log("Q23: ", either_adjacent_24([1, 2, 2]),either_adjacent_24([4, 4, 1]),either_adjacent_24([4, 4, 1, 2, 2]));





  //Q24: Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). 
  //     Return the count of the number of times that the two elements differ by 2 or less, but are not equal.
  function matchUp(arr1,arr2) {
    var count =0;
    for (let i =0; i <arr1.length ; i++){
      if (arr1[i] != arr2[i] && Math.abs(arr1[i] - arr2[i]) <= 2)
         count++;
    }    
      return count;
  
  }
  console.log("Q24: ",matchUp([1, 2, 3], [2, 3, 10]),matchUp([1, 2, 3], [2, 3, 5]),matchUp([1, 2, 3], [2, 3, 3]));  




  // Q25: Given an array of ints, return true if the array contains two 7's next to each other, 
  //  or there are two 7's separated by one element, such as with {7, 1, 7}.

function has77(arr){
    for(let i=0; i<arr.length-2; i++){
        if(arr[i] == 7){
            if(arr[i+1] == 7 || arr[i+2] == 7)
                return true;
        }
    }
    if(arr[arr.length-2] == 7 && arr[arr.length-1] == 7)
        return true;
    else
        return false;
}
console.log("Q25: ", has77([1, 7, 7]), has77([1, 7, 1, 7]), has77([1, 7, 1, 1, 7]));


//Q26: Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.
function has_1_2(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] == 1){
            let j = i+1;
            while(j<arr.length){
                if(arr[j] == 2){
                    return true;
                }
                j++;
            }
            break;
        }
    }
    return false;
}
console.log("Q26: ", has_1_2([1, 3, 2]), has_1_2([3, 1]), has_1_2([3, 1, 4, 5, 2]));



//Q27: Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.
function even3_odd3(arr){
    var len = arr.length;
    for(let i=0; i<len-2; i++){
        if(arr[i] % 2 == 0){
            if(arr[i+1] % 2 == 0 && arr[i+2] % 2 == 0)
                return true;
        }
        else{
            if(arr[i] % 2 == 1){
                if(arr[i+1] % 2 == 1 && arr[i+2] % 2 == 1)
                    return true;
            }
        }
    }
    return false;
}
console.log("Q27: ", even3_odd3([2, 1, 3, 5]), even3_odd3([2, 1, 2, 5]), even3_odd3([2, 4, 2, 5]));