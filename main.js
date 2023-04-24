const btn = document.querySelector("#btn")
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
console.log(box1.getAttribute("class"))
btn.addEventListener("click",function(){
    // console.log(box1.getAttributes("class")==="box box1")
    if(box1.getAttribute("class") === "box box1"){
        box1.setAttribute("class","box box1 boxgoright")
        box2.setAttribute("class","box box2 boxgodown")
        box3.setAttribute("class","box box3 boxgoleft")
    }
    else{
        box1.setAttribute("class","box box1")
        box2.setAttribute("class","box box2")
        box3.setAttribute("class","box box3")
    }
   
    
})




// function dio() {
//     console.log("サ・ワールド！！！！！")
//     setTimeout(function () {
//         console.log("一秒経過");
//     }, 1000)

//     setTimeout(function () {
//         console.log("二秒経過");
//     }, 2000)

//     setTimeout(function () {
//         console.log("三秒経過");
//     }, 3000)

//     setTimeout(function () {
//         console.log("そして時間が動き出す");
//     }, 3500)

//     setTimeout(function () {
//         console.log("Wryyyyyyyyyy!!!!!!!!!");
//     }, 4000)

// }
// dio();