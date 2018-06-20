console.log("Hello Here is a simple swap function. Use Swap(var,var).")
    function Swap(a,b){
        let temp = a
        a = b
        b = temp
        console.log(a,b)
        return
    }
console.log("Here is a simple count from to function. Use Count(number,number).")
function Count(num1,num2){
    if (num1 > num2){
        for(let i = num1; i > num2-1; i--){
            console.log(i);
        }
    }
    for(let i = num1; i < num2+1 ; i++){
        console.log(i);
    }
    return
}
console.log("Here is a function to find the greatest value in an arry. Use GreatArr([1,2,3,4,5]).")
function GreatArr(arr){
    let num = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            num = arr[i]
        }
    }
    console.log(num)
    return
}
