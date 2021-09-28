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
console.log("Q1: ", sameSubstring("xxcaazz", "xxbaaz"), sameSubstring("abc", "abc"), sameSubstring("abc", "axc"));


//  Q(1) Method 2:

// function sameSubstring(s1, s2){
//     var length = s1.length<=s2.length ? s1.length : s2.length;
//     var count = 0;
//     for(let i=0; i<length-1; i++){
//         let sub1 = s1.substring(i, i+2);
//         let sub2 = s2.substring(i,i+2);

//         if(sub1 == sub2)
//             count++;
//     }
//     return count;
// }
// console.log(sameSubstring("xxcaazz", "xxbaaz"), sameSubstring("abc", "abc"), sameSubstring("abc", "axc"));


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
