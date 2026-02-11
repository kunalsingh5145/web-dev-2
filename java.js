// // // // // // const para=document.querySelector("p")
// // // // // // para.innerText="Hello Shubham"
// // // // // // para.style.backgroundColor="Black"
// // // // // // para.style.color="White"

// // // // // // Selecting elements by class name

// // // // // // const paras=document.getElementsByClassName("para")
// // // // // // paras[0].innerText="Hello!"
// // // // // // paras[0].innerHTML="<h1 style='color:red; background-color:Thistle;'>WOOWWWW</h1>"
// // // // // // paras[1].style.color='Blue'
// // // // // // Returns an array of elements if there are multiple.

// // // // // // Selecting elements by id

// // // // // // const para=document.getElementById("heading")
// // // // // // para.innerText="MAIN SHUBHAM HUN"
// // // // // // para.innerHTML="<p id='heading' style='color:Blue;background-color:Thistle;'>MAIN SHUBHAM HUN</p> " 


// // // // // // Returns a new array
// // // // // // let arr=[1, 2, 3, 4, 5, 6 ,7]
// // // // // // const newarr=arr.map((arr)=>2*arr)
// // // // // // console.log(newarr)    OUTPUT=> Array(7) [ 2, 4, 6, 8, 10, 12, 14 ]


// // // // // // Doesn't return a new array
// // // // // // let arr=[1,2,3,4,5,6,7]
// // // // // // arr.forEach((ele)=>console.log(arr+=2))

// // // // // // Difference in .textContent and .innerText

// // // // // // .textContent applies changes to the hidden elements also (display:none or visibility:hidden).
// // // // // // .innerText doesn't apply changes to hidden elements.

// // // // // // const container=document.querySelector(".container")
// // // // // // const button=document.querySelector("button")
// // // // // // container.addEventListener("click",()=>{
// // // // // //     console.log("Container clicked")
// // // // // // })

// // // // // // button.addEventListener("click",()=>{
// // // // // //     console.log("Button clicked")
// // // // // // })

// // // // // // console.log(a) ERROR: ReferenceError: Cannot access 'a' before initialization
// // // // // // console.log(b) Undefined

// // // // // // let a = 239
// // // // // // var b = 2595

// // // // // // function hello(){
// // // // // //     console.log("Hello World")
// // // // // // }

// // // // // // hello()



// // // // // // function first() {
// // // // // //     second()
// // // // // // }
// // // // // // function second() {
// // // // // //     third()
// // // // // // }
// // // // // // function third() {
// // // // // //     console.trace()
// // // // // // }
// // // // // // first()

// // // // // // let val=40

// // // // // // function calc(){
// // // // // //     console.log(val)
// // // // // //     let val=100
// // // // // // }

// // // // // // calc()

// // // // // // setTimeout(() => {
// // // // // //     alert("hello")
// // // // // // }, 2* 1000);
// // // // // // let num = 1;

// // // // // // const interval = setInterval(() => {
// // // // // //   console.log(num);
// // // // // //   num++;

// // // // // //   if (num > 10) {
// // // // // //     clearInterval(interval); 
// // // // // //   }
// // // // // // }, 1000);
// // // // // // const name = document.querySelector("#name")
// // // // // // const btn=document.querySelector(".btn")
// // // // // // const list=document.querySelector(".list")
// // // // // // btn.addEventListener("click",()=>{
// // // // // //   constli=document.createElement('li')
// // // // // //   list.innerText=name.value;
// // // // // //   list.appendChild(li)
// // // // // //   name.value=""
// // // // // // })
// // // // // // const name = document.querySelector("#name")
// // // // // // const btn=document.querySelector(".btn")
// // // // // // const list=document.querySelector(".list")
// // // // // // btn.addEventListener("click",()=>{ 
// // // // // //     if()
// // // // // // constli=document.createElement('li')
// // // // // // dlt.addEventListener("click",()={
// // // // // // list.removeChild(li)
// // // // // // })
// // // // // // li.appendChild(dlt)
// // // // // // list.appendChild(li)
// // // // // // name.value=""
// // // // // // }not complete fully !!!!
// // // // // //  function print(num){
// // // // // //     console.log("inside no",num)
// // // // // //  }
// // // // // //  print(333)
// // // // // //  function print(num){
// // // // // //     setTimeout(()=>{
// // // // // //         console.log("inside no")
// // // // // //         num()
// // // // // //  },3000)
// // // // // // }

// // // // // // function sample(){//call backfn
// // // // // //     comsole.log("inside callback")

// // // // // // }
// // // // // // print(sample)g
// // // // // console.log ("starting  homework")
// // // // // setTimeout(() => {
    
// // // // // console.log("home workdone");
// // // // // console.log("starting dinner");
// // // // //   setTimeout(() => {
// // // // //     console.log(" dinner done");
// // // // //     console.log("getting ready to go out");
// // // // //   setTimeout(() => {
// // // // //     console.log(" going to play ground")
    
    
// // // // //   }, 1000);

// // // // //   }, 2500);
// // // // // }, 2000);
// // // //  function finishhomework(callback){|
// // // //     console.log ("starting homework")
// // // //     setTimeout(() => { 
// // // //         console.log("homework done")
        
// // // //     }, timeout);
// // // //  }
// // // function dohomework(){
// // // const p = new  promise (( resolve ,reject )=> {
// // //     setTimeout(() => {

// // //         if (done) {
// // //             console.log(" work completed")
// // //             resolve ("homework is done")
// // //         }else{
// // //             reject ("work is not completed")
// // //         }
// // //     }, 5000);
// // // }) 
// // //  return p 
// // // }
// // // p.then ((data) =>{
// // //     console.log (data .name)
// // // }) .catch ((err)=>{
// // //     console.log(err)
// // // }).finally (()=>{
// // //      console.log("finally back")
// // //  } )
// // // const p = new  promise (( resolve ,reject )=> {
// // //     setTimeout(() => {

// // //         if (done) {
// // //             resolve ("go  to play ground")
// // //         }else{
// // //             reject ("not to go to play ground")
// // //         }
// // //     }, 5000);
// // // })
// // // p.then ((data) =>{
// // //     console.log (data .name)
// // //     return("eat dinner")


// // // }) .catch ((err)=>{
// // //     console.log(err)

// // // }).finally (()=>
// // //      console.log("finally back")
// // // )
// // function dohomework(){
// // const p = new  promise (( resolve ,reject )=> {
// //     setTimeout(() => {

// //         if (done) {
// //             console.log(" work completed")
// //             resolve ("homework is done")
// //         }else{
// //             reject ("work is not completed")
// //         }
// //     }, 5000);
// // }) 
// //  return p 
// // } 
// // function eatdinner(){
// // const p = new  promise (( resolve ,reject )=> {
// //     let done = false;
// //     setTimeout(() => {

// //         if (done) {
// //             console.log(" dinner compled")
// //             resolve ("dinner is done")
// //         }else{
// //             reject ("dinner is not done")
// //         }
// //     }, 2000);
// // }) 
// //  return p 
// // }
// // function gotoplayground(){
// // const p = new  promise (( resolve ,reject )=> {
// //     let done= true;

// //     setTimeout(() => {

// //         if (done) {
// //             console.log(" went to playground")
// //             resolve ("playground time")
// //         }else{
// //             reject ("not allowed to go")
// //         }
// //     }, 2000);
// // }) 
// //  return p 
// // }
// // dohomework().then((data)=>{
// //     console.log (data)
// //     return eatdinner()
// // }).then((data)=>{
// //     console.log(data)
// //     return(playground)
// // }).then((data)=>{
// //     console.log(data)
// // }).catch((err)=>{  
// //     console.log(err)
// // }).finally(()=>{
// //     console.log("go to sleep")
// // })
// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("food ordered")
//             res()
//         }, 2000)
//     })
// }
// function foodprepared(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("food perpared")
//             res()
//         }, 2000)
//     })
// }

// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("Food diliver")
//             res()
//         }, 2000)
//     })
// }
// async function foodorder(){
//     await orderFood()
//     await foodprepared()
//     await deliverFood()
// }

// foodorder()
function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food ordered")
            res()
        },2000)
    })
}

function prepareFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food pepared")
            res()
        },2000)
    })
}

function deliverFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food delivered")
            res()
        },2000)
    })
}

async function foodOrder(){
    await orderFood()
    await prepareFood()
    await deliverFood()
}

foodOrder()
    


