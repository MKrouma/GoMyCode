console.log("Hello World!")

// addition fucntion
function addition(a,b) {
    return a+b;
}

console.log(addition(1,4))


// substraction fucntion
function substraction(a,b) {
    return a-b;
}

console.log(`Substraction : ${substraction(10,15)}`)


// exercice : fucntion return sum of elements in array
function sum_array(array){
    var somme = 0 ;
    for (let i=0; i<array.length; i++) {
        somme += array[i];
    }

    return somme;
}

arr = [1,5]
console.log(`Sum of array : ${sum_array(arr)}`)


// exercice : minimum of arr
function min(arr){
    let min = arr[0];
    
    for(let i=0; i<arr.length; i++) {
        if (min > arr[i]){
            min = arr[i]
        }
    }

    console.log(`Minimum of array : ${min}`)
    return min
}

min([1, 2, 10, 8, -1])