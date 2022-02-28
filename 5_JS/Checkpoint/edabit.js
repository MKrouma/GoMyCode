// JS(EDABIT) CHECKPOINT

// Exercice 1 : Find the Smallest and Biggest Numbers
function minMax(arr)
{
    let min = arr[0];
    let max = arr[0];

    for(let i=0; i<arr.length; i++)
    {
        // condition for the biggest
        if (max < arr[i])
        {
            max = arr[i]
        }

        // condition for the smallest
        if (min > arr[i])
        {
            min = arr[i]
        }

    }

    console.log(`The biggest : ${max}`)
    console.log(`The smallest : ${min}`)

    return [min, max]
}

arr = [2334454, 5]
console.log(minMax(arr))

// Are the Numbers Equal?
function isSameNum(num1, num2)
{
    let isEqual;

    if (num1 === num2) 
    {
        isEqual = true
    } else {
        isEqual = false
    }

    return isEqual
}

console.log(isSameNum(2, "2"))

// Filter out Strings from an Array
function filterArray(arr)
{
    // empty arr
    let newArr = [];

    for (var el of arr){
        if (typeof(el) == "number")
        {
            newArr.push(el)
        }
    }

    return newArr

}

arr = [1, "a", "b", 0, 15]
console.log(filterArray(arr))

// Absolute Sum
function getAbsSum(arr){

    let sum = 0;

    for (var el of arr){
        let abs_el = Math.abs(el);
        sum += abs_el;
    }

    return sum
}

arr = [-3, -4, -10, -2, -3]
console.log(getAbsSum(arr))


// How Much is True?
function countTrue(arr){

    let count = 0;

    for (var el of arr)
    {
        if (el === true)
        {
            count += 1
        }
    }

    return count
    
}

arr = [true, false, false, true, false]
console.log(countTrue(arr))

// Printer Levels
function inkLevels(inks) {
	let maxPages = 0;
	let newArr = [];

	for (const key in inks)
	{
			console.log(key)
			newArr.push(inks[key])
	}

	maxPages = Math.min.apply(Math, newArr)

	console.log(newArr)
	console.log(maxPages)
	
	return maxPages
}

obj = {"cyan": 23, "magenta": 12, "yellow": 10}
inkLevels(obj)


// Object to array
function objectToArray(obj)
{

    let objArr = []

    for (const key in obj){
        value = obj[key]
        objArr.push([key, value])
    }

    return objArr
}

obj = {D: 1,B: 2,C: 3}
console.log(objectToArray(obj))


// Get Sum of People's Budget
function getBudgets(arr) 
{
    let budgetTotal = 0

    for (var obj of arr)
    {
        // fetch buget in obj
        budget = obj["budget"]
        console.log(budget)


        budgetTotal += budget
    }
	
    return budgetTotal
}

arr = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }]
console.log(getBudgets(arr))


// Ageing the population
function afterNYears(names, n) 
{   
	for (const key in names) {
        age = names[key];
        ageNYears = age + Math.abs(n);

        names[key] = ageNYears;
    }

    return names
}

names = {
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13}

console.log(afterNYears(names, 1))


// Greetings


// function greeting(name) {
//     var gretting;
// 	var guest_list_keys = Object.keys(GUEST_LIST);

//     if (guest_list_keys.includes(name))
//     {
//         country = GUEST_LIST[name];
//         console.log(`Hi! I'm ${name}, and I'm from ${country}.`);
//         gretting = `Hi! I'm ${name}, and I'm from ${country}.`

//     } else {
//         console.log("Hi! I'm a guest.")
//         gretting = "Hi! I'm a guest."
//     }

//     return gretting
// }

// greeting("mamadou")


// Seven boom
function sevenBoom(arr) {
    let message;

    for (var el of arr) {

        el_string = el.toString()
        console.log(el_string.includes("7"))

        if (el_string.includes("7")){
            return message = "Boom!"  
        }
    }

    message = "there is no 7 in the array"

    return message
}

arr = [2, 55, 60, 97, 86]
console.log(sevenBoom(arr))