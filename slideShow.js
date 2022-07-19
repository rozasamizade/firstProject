let items=document.querySelector(".slider").children;
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
itemLength=items.length;
index=0;


next.onclick=function (){
    nextslide("next");
}
prev.onclick= function(){
    nextslide("prev");
}

setInterval(function(){
    nextslide("next");
},7000);


function nextslide(direction){
    if (direction == "next"){
        index++;
        if(index == itemLength){
            index = 0;
    }
    }
    else {
        if(index == 0 ){
            index = itemLength-1;
        }
        else{
            index--;
        }
    }

    for(var i=0; i<itemLength ;i++){
        items[i].classList.remove("active");
    }
    items[index].classList.add("active");
}





