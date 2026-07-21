//string methods
let str="         Lorem ipsum dolor sit amet consectetur  sit , sit       "
 console.log(str.length)
 console.log(str)
 console.log(str[0])//l
 for(let i=0;i<str.length;i++){
    // console.log(str[i])
 }
 console.log(str.includes('amet'))//return boolean
console.log(str.includes('ghjgj'))//return boolean
console.log(str.indexOf("ipsum"))//return begin of index of word
console.log(str.replace("sit","js"))//replace just the first word in the sentence
console.log(str.replaceAll("sit","js"))//replace all words in the sentence
console.log(str.trim())//remove begin , end space in sentence
console.log(str.slice(20,30))//identify which part to keep

let courses="html css js"
console.log(courses.split(' '))//split string into array 
console.log(courses.startsWith("html"))//true
console.log(courses.startsWith("h"))//true
console.log(courses.endsWith("html"))//false
console.log("------------------------")
////////////////////////////////////////////////////
//number methods
// let p= prompt("enter number")
// console.log(typeof p)//return number into string
// console.log(p)
// console.log(Number(p))//return number, if numText get NaN, ,if textNum get NaN
// console.log(parseInt(p))//not return decimal just int , if numText get int ,if textNum get NaN
// console.log(parseFloat(p))//return number, if numText get number ,if textNum get NaN
// console.log("------------------------")
let test="ghh"
// let test=20
// let test=true
// console.log(isNaN(test))//not a number function return boolean :true
// console.log(Math.random()*100)
  
//////////////////////////////
// localStorage
localStorage.setItem("Name","zayn")//add items to local storage
let users=[
    {
        name:"rwan",
        id:1,
        balance:5000000
    },
     {
        name:"jana",
        id:2,
        balance:5000000
    }, {
        name:"joudy",
        id:3,
        balance:500000
    }
]
// localStorage.setItem("bank users",JSON.stringify(users))//print array and its content as string
// //LocalStorage.setItem(key,value you want to store in this key)
// console.log(localStorage.getItem("bank users"))//put key it self to call just the hello not any other one ,if you write another name not exist null 

// localStorage.setItem('hello',users)
// console.log(localStorage)
// console.log(localStorage.getItem("hello"))//put key it self to call just the hello not any other one ,if you write another name not exist null 



/////////////////////////////////////////
//first try

// let changeImg = ()=>{
// let img=document.querySelector("img")
// console.log(img.src)
// var ss
// if(ss= (img.src="images/download.jpg")){
//     return img.src="images/OIP.jpg"
// }else if(ss != (img.src="images/download.jpg") ){
//     // img.src="images/OIP.jpg"
//     return img.src="images/download.jpg"
// }

// }

//second try

// let changeImg=()=>{
// let img=document.querySelector("img")
//  console.log(img.src) 
//  img.src="images/OIP.jpg"
// }
// let change=()=>{
// let img=document.querySelector("img")
//  console.log(img.src) 
//  img.src="images/download.jpg"
// }

//third try

let changeImg = () => {
    let img = document.querySelector("img");
    
    if (img.src.includes("download.jpg")) {
        img.src = "images/OIP.jpg"; 
    } else {
        img.src = "images/download.jpg" 
    }
};
