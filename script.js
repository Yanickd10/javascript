name = "Jean";
// console.log(name)
age = 18;
// if(age >= 18)
    // console.log("You're old enough") 
// else

//        console.log("You're still young")
// var answer = (age >= 18)?
// "You're old enough": "You're not old enough";
// console.log(answer);

// normal/ arrow funtions;

// function sayHi(name){
//   console.log("Hi!"+name)
// }
// sayHi("Jean"); 
// sayHi("John")
const strtBtn =document.getElementById("strt");
const counter = document.getElementById("counter");
let i = 0;
 
strtBtn.addEventListener("click", ()=>{
//   console.log("Hi!")
setInterval(()=>{
  i++;
  counter.innerText = i;
},1000)
}); 
const form = document.getElementById("form");
// form.innerText= "This is a form";
form.innerHTML = `
    <form action="">
            <input type="text" placeholder="Enter your name">
            <input type="password" placeholder="Create password">
            <button>SUBMMIT</button>
        </form>
`;

const btn = document.querySelector("button"); 
btn.addEventListener("click",()=>{
    btn.style.backgroundColor = "red";
})
btn.addEventListener("mouseout",()=>{
    btn.style.backgroundColor = "white";
})
btn.addEventListener("mouseover",()=>{
    btn.style.backgroundColor = "green";
})
