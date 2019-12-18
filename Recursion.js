// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false



function checkValuesInArray(arr,callBack){
 
    if(arr.length <= 0 ) return true;
    let popped=arr.pop()
    let result = callBack(popped)

    if(result === false ){
         return false
    }else{
        all(arr, callBack)
        }

return result
}

all([1,2,5], function(num){
	return num < 7;
});



// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

function productOfAArray(arr){
    let result
    if (arr.length <= 1) return arr[0]
    let popped = arr.pop()
    result  = popped * productOfAArray(arr)

    return result
}