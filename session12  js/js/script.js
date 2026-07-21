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
/////////////////////////////////////////

///// function expression

let getFullName = function () {
    return "rwan"

}
 console.log(getFullName())//return result which is rwan
 console.log(getFullName)//return the whole function as it is
 console.log("-----------------------------")
// //////////////////////////////////

//// arrow function 
// let userName = (num)=> num > 30
// console.log(userName(20)) //boolean

//it looks the same as this
let userName = (num) => {
    return num > 30
}
console.log(userName(20))
//arrow function with no parameters
let welcome=()=> "hello world"
console.log(welcome())// dont forget to put () for variable as it become the function it self
//normal function
// function checkAge(age) {
//     return age >= 18;
// }
// console.log(checkAge(prompt()))
// console.log(checkAge(20))
//the equal of it in arrow function
let checkAge=(age)=> age>=18
console.log(checkAge(20))
console.log(checkAge(prompt()))
 console.log("-----------------------------")
//////////////////////////////////
//array

// let userName = "Zein"
// let userAge = 20
// let userAddress = "October"
// let isGraduated = false

// let userInfo = ["Zein", 20, 40, "October", false]

// console.log(userInfo[1]) /// get item
// userInfo[4] = "Egyptian" // set item
// userInfo[userInfo.length] = "Maadi" // set item
// userInfo[1] = 22 // update item

// console.log(userInfo.length)


// --------------------------------------
//task1 ids

// let ids = [10, 20, 30, 40]
// let element = prompt("enter id")

// let findElement = ids.find((item) => item == element)
// let findIndex = ids.findIndex((item) => item == element)
// // ids.forEach((value,i,arr)=>{
// if (findElement != undefined) {
//     alert(`element found: ${findElement}, its index is ${findIndex}`)
// } else {
//     alert("element not found")
//     ids.push(element)
// }
// // })

// console.log(ids)
//  //-----------------------------------------------
// //task2 bank system
// let users=[]
// function addUser(){
//     let obj= {
//     name:prompt('enter your name'),
//     balance: prompt("enter balance"),
//     id:prompt("enter id")
//      };
//      users.push(obj)
// }
// // console.log(obj) // not seen as its let
// // users.push(addUser())
// addUser()
// console.log(users)
