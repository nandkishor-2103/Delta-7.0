// !<!-- ========== Start Q.1 Section ========== -->

/* function greaterElement(arr, num) {
    let n = arr.length;
    for(let i = 0; i < n ; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
        }
}

let arr = [2, 5, 7, 1, 8, 9, 2, 4, 3, 6];
let num = 5;

greaterElement(arr, num); */

// !<!-- ========== End Q.1 Section ========== -->


// ?<!-- ========== Start Q2. Section ========== -->

/* function getUnique(str) {
    let n = str.length;
    let ans = "";
    
    for(let i = 0; i < n; i++) {
        if(ans.indexOf(str[i]) == -1) {
            ans += str[i];
        }
    }
    return ans;
}


let str = "abbacdeffeghhihijfkl";

let result = getUnique(str);

console.log(result); */

// ?<!-- ========== End Q2. Section ========== -->


// !<!-- ========== Start Q3. Section ========== -->
/* 
function longestString(country) {
    let len = 0;
    let ans = null;
    for(let i = 0; i < country.length; i++) {
        let currLen = country[i].length;
        if(currLen > len) {
            len = currLen;
            ans = country[i];
        }
    }
    return ans;
}

let country = ["Australia", "Germany", "United States of America"];

let result = longestString(country);

console.log(result);
 */
// !<!-- ========== End Q3. Section ========== -->



// ?<!-- ========== Start Q4. Section ========== -->

/* function numberOfVowels(str) {
    let cnt = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            cnt++;
        }
    }
    return cnt;
}

let str = "abbcdeffghhhijfklou";

let result = numberOfVowels(str);

console.log(result); */

// ?<!-- ========== End Q4. Section ========== -->



// !<!-- ========== Start Q5. Section ========== -->

/* let inRange = function(start, end) {

    let randNum = Math.floor((Math.random() * (end - start + 1)) + start);
    return randNum;
}

console.log(inRange(2, 7)); */

// !<!-- ========== End Q5. Section ========== -->


