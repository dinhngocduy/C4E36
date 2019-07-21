let abc = document.getElementById("dropdown");
let dlt= document.getElementById("delete")
dlt.addEventListener("click",()=>{
    
        for (let i = 0; i <= abc.options.length; i++) {
            if(abc.options[i].selected){
            abc.remove(i)}}
})