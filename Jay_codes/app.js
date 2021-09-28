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