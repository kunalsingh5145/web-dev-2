// const para=document.querySelector("p")
// para.innerText="Hello Shubham"
// para.style.backgroundColor="Black"
// para.style.color="White"

// Selecting elements by class name

// const paras=document.getElementsByClassName("para")
// paras[0].innerText="Hello!"
// paras[0].innerHTML="<h1 style='color:red; background-color:Thistle;'>WOOWWWW</h1>"
// paras[1].style.color='Blue'
// Returns an array of elements if there are multiple.

// Selecting elements by id

// const para=document.getElementById("heading")
// para.innerText="MAIN SHUBHAM HUN"
// para.innerHTML="<p id='heading' style='color:Blue;background-color:Thistle;'>MAIN SHUBHAM HUN</p> " 


// Returns a new array
// let arr=[1, 2, 3, 4, 5, 6 ,7]
// const newarr=arr.map((arr)=>2*arr)
// console.log(newarr)    OUTPUT=> Array(7) [ 2, 4, 6, 8, 10, 12, 14 ]


// Doesn't return a new array
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((ele)=>console.log(arr+=2))

// Difference in .textContent and .innerText

// .textContent applies changes to the hidden elements also (display:none or visibility:hidden).
// .innerText doesn't apply changes to hidden elements.

// const container=document.querySelector(".container")
// const button=document.querySelector("button")
// container.addEventListener("click",()=>{
//     console.log("Container clicked")
// })

// button.addEventListener("click",()=>{
//     console.log("Button clicked")
// })

// console.log(a) ERROR: ReferenceError: Cannot access 'a' before initialization
// console.log(b) Undefined

// let a = 239
// var b = 2595

// function hello(){
//     console.log("Hello World")
// }

// hello()



// function first() {
//     second()
// }
// function second() {
//     third()
// }
// function third() {
//     console.trace()
// }
// first()

// let val=40

// function calc(){
//     console.log(val)
//     let val=100
// }

// calc()

// setTimeout(() => {
//     alert("hello")
// }, 2* 1000);
// let num = 1;

// const interval = setInterval(() => {
//   console.log(num);
//   num++;

//   if (num > 10) {
//     clearInterval(interval); 
//   }
// }, 1000);
// const name = document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener("click",()=>{
//   constli=document.createElement('li')
//   list.innerText=name.value;
//   list.appendChild(li)
//   name.value=""
// })
// const name = document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener("click",()=>{ 
//     if()
// constli=document.createElement('li')
// dlt.addEventListener("click",()={
// list.removeChild(li)
// })
// li.appendChild(dlt)
// list.appendChild(li)
// name.value=""
// }not complete fully !!!!
//  function print(num){
//     console.log("inside no",num)
//  }
//  print(333)
//  function print(num){
//     setTimeout(()=>{
//         console.log("inside no")
//         num()
//  },3000)
// }

// function sample(){//call backfn
//     comsole.log("inside callback")

// }
// print(sample)g
console.log ("starting  homework")
setTimeout(() => {
    
console.log("home workdone");
console.log("starting dinner");
  setTimeout(() => {
    console.log(" dinner done");
    console.log("getting ready to go out");
  setTimeout(() => {
    console.log(" going to play ground")
    
    
  }, 1000);

  }, 2500);
}, 2000);