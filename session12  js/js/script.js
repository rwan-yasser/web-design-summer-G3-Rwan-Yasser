// var , let , const
//redeclare:more 1 variable has same name
//reassign 
// var can be redeclared,reassign
// var age=20;
// var age="child"
// console.log(age)
// age=true
// console.log(age)

//let not redeclred , can reassign
// let x="lorem"
// let x=2
// console.log(x)//error
// x=false
// console.log(x)

// const address="alex"
// const address="cairo"
// console.log(address) //error

// ------------------------------------
///// function statment
// function testFunc(startNum, endNum) {
//     var firstName = prompt('enter your first name')
//     var lastName = prompt('enter Your Last Name')
//     fullName = `${firstName} ${lastName}`
//     let str = "ghjkl;"
//     if (true) {
//         var num = 20
//         let test = "lorem"
//         console.log(str)
//     }
//     //  console.log(test)
//     //  console.log(num)
//     console.log(str)
//     for (let i = startNum; i <= endNum; i++) {
//         console.log(i)
//     }
//     return firstName == "zein"
// }
// استدعاء الدالة برة خالص
// testFunc(1, 5);
// console.log(str)//error

// let testVar = testFunc(2,5) //تخزين ناتج الدالة في متغير 
// console.log(testVar)

// --------------------------------------
//task1 ids

let ids = [10, 20, 30, 40]
let element = prompt("enter id")

let findElement = ids.find((item) => item == element)
let findIndex = ids.findIndex((item) => item == element)
// ids.forEach((value,i,arr)=>{
if (findElement != undefined) {
    alert(`element found: ${findElement}, its index is ${findIndex}`)
} else {
    alert("element not found")
    ids.push(element)
}
// })

console.log(ids)
 //-----------------------------------------------
//task2 bank system
let users=[]
function addUser(){
    let obj= {
    name:prompt('enter your name'),
    balance: prompt("enter balance"),
    id:prompt("enter id")
     };
     users.push(obj)
}
// console.log(obj) // not seen as its let
// users.push(addUser())
addUser()
console.log(users)
