
let a = document.getElementById("demo-a").href
let demoBtn = document.getElementById("btn-demo")
demoBtn.addEventListener("click",()=>{
   document.getElementById('demo-input').value = a
})