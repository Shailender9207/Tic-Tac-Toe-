let sign="X"
let boxes=document.querySelectorAll(".box");
function changeSign(){
    if(sign=="X"){
        sign="O"
    }else{
        sign="X"
    }
}

for(item of boxes){
    item.addEventListener("click",function(e){
         
        e.target.innerText=sign;
        win();
        changeSign();
       
    })
}
console.log(boxes[0].innerText);
function win(){
if((boxes[0].innerText==boxes[1].innerText) && (boxes[2].innerText==boxes[1].innerText) && (boxes[0].innerText!="")){
    alert("Player "+boxes[0].innerText+" win");
    reset();
}
if((boxes[3].innerText==boxes[4].innerText) && (boxes[4].innerText==boxes[5].innerText) && (boxes[3].innerText!="")){
    alert("Player "+boxes[3].innerText+" win");
    reset();
}
if((boxes[6].innerText==boxes[7].innerText) && (boxes[7].innerText==boxes[8].innerText) && (boxes[6].innerText!="")){
    alert("Player "+boxes[6].innerText+" win");
    reset();
}
if((boxes[0].innerText==boxes[3].innerText) && (boxes[3].innerText==boxes[6].innerText) && (boxes[0].innerText!="")){
    alert("Player "+boxes[0].innerText+" win");
    reset();
}
if((boxes[1].innerText==boxes[4].innerText) && (boxes[4].innerText==boxes[7].innerText) && (boxes[1].innerText!="")){
    alert("Player "+boxes[1].innerText+" win");
    reset();
}
if((boxes[2].innerText==boxes[5].innerText) && (boxes[5].innerText==boxes[8].innerText) && (boxes[2].innerText!="")){
    alert("Player "+boxes[2].innerText+" win");
    reset();
}
if((boxes[0].innerText==boxes[4].innerText) && (boxes[4].innerText==boxes[8].innerText) && (boxes[4].innerText!="")){
    alert("Player "+boxes[0].innerText+" win");
    reset();
}
if((boxes[2].innerText==boxes[4].innerText) && (boxes[4].innerText==boxes[6].innerText) && (boxes[2].innerText!="")){
    alert("Player "+boxes[2].innerText+" win");
    reset();
}
}
 function reset(){
     for(item of boxes){
         item.innerText=""
     }
     sign="X"
 }
