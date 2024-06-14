SliderHeader=document.getElementById("Slider");


ListSeparator();

let Interval=setInterval(changeSlide,3000);



/////////////////////////////////////////////////////// FUNZIONI


SliderHeader.addEventListener("mouseenter",function(){
    clearInterval(Interval);
})

SliderHeader.addEventListener("mouseleave",function(){
    Interval=setInterval(changeSlide,3000);
})

/////////////////////////////////////////////////////// SEPARATORE LISTE HEADER
function ListSeparator(){
    UpperList=document.querySelectorAll(".UpperList nav ul li");
homeCategoriesList=document.querySelectorAll(".homeCategories nav ul li");

for(let i=0;i<UpperList.length-1;i++){
    UpperList[i].innerHTML+="&nbsp&nbsp|&nbsp&nbsp";
}

for(let i=0;i<homeCategoriesList.length-1;i++){
    homeCategoriesList[i].innerHTML+="&nbsp&nbsp&nbsp";
}
}

/////////////////////////////////////////////////////// SLIDE PUBBLICITARIO

function changeSlide(){
  
    SliderDivHeader=document.querySelectorAll("#Slider div");

for(i=0;i<SliderDivHeader.length;i++){

    if(SliderDivHeader[i].classList.contains('onLeft')){
SliderDivHeader[i].classList.remove('onLeft');
    }

    if(SliderDivHeader[SliderDivHeader.length-1].classList.contains('onLeft')){
        SliderDivHeader[SliderDivHeader.length-1].classList.remove('onLeft');
    }

    if(SliderDivHeader[i].classList.contains('visualizzato')){
      NextDiv=SliderDivHeader[i].nextElementSibling;
      
      if(NextDiv!=null){
      NextDiv.classList.add('visualizzato');
        SliderDivHeader[i].classList.remove('visualizzato');
        SliderDivHeader[i].classList.add('onLeft');
        break;
    }else if(NextDiv==null){
        SliderDivHeader[0].classList.add('visualizzato');
        SliderDivHeader[i].classList.remove('visualizzato'); 
        SliderDivHeader[i].classList.add('onLeft'); 
        break;
}
    }
}
}

/////////////////////////////////////////////////////// SUMMARY
let whereShowTotal = document.querySelector(".total");
let priceShoe1 = parseFloat(document.querySelector(".priceshoeBasket1").textContent);
let priceShoe2 = parseFloat(document.querySelector(".priceshoeBasket2").textContent);

let total;



function selectedChange(){
    console.log("Eccolo italia uno");
    let quantity1 = parseInt(selectElement1.value);
    let quantity2 = parseInt(selectElement2.value);

    if(document.getElementById("shoeBasket1").style.display=="none"){
        total =priceShoe2 * quantity2;
    }else if(document.getElementById("shoeBasket2").style.display=="none"){
        total =priceShoe1 * quantity1;
        }else{
            total = priceShoe1 * quantity1 + priceShoe2 * quantity2;
        }

    whereShowTotal.innerHTML="TOTAL: "+total.toFixed(2)+"€";



}


/*   Calcolo di Default */
 total = priceShoe1 + priceShoe2;
 whereShowTotal.innerHTML="TOTAL: "+total.toFixed(2)+"€";   /* TAGLIA DECIMALI*/

const selectElement1 = document.getElementById("quantity1");
const selectElement2 = document.getElementById("quantity2");

selectElement1.addEventListener('change', function() {
    const selectedValue1 = parseInt(this.value);
});

selectElement2.addEventListener('change', function() {
    const selectedValue2 = parseInt(this.value);
});



/*
document.getElementById("refresh").addEventListener("click",function(){
    let quantity1 = parseInt(selectElement1.value);
    let quantity2 = parseInt(selectElement2.value);

    if(document.getElementById("shoeBasket1").style.display=="none"){
        total =priceShoe2 * quantity2;
    }else if(document.getElementById("shoeBasket2").style.display=="none"){
        total =priceShoe1 * quantity1;
        }else{
            total = priceShoe1 * quantity1 + priceShoe2 * quantity2;
        }

    whereShowTotal.innerHTML="TOTAL: "+total.toFixed(2)+"€";


});
*/


/*--------------------------RIMOZIONE SCARPA*/
const bin1=document.getElementById("binShoe1");
const bin2=document.getElementById("binShoe2");

bin1.addEventListener("click",function(){
    let quantity2 = parseInt(selectElement2.value);
    total = priceShoe2 * quantity2;
    whereShowTotal.innerHTML="TOTAL: "+total.toFixed(2)+"€";
    document.getElementById("shoeBasket1").style.display="none";
    document.getElementById("shoeBasket2").style.top="-25px";
    document.getElementById("shoeBasket2").style.border="none";

    if(document.getElementById("shoeBasket1").style.display=="none"&&document.getElementById("shoeBasket2").style.display=="none"){
        whereShowTotal.innerHTML="NO ITEMS IN YOUR BAG";
    document.querySelector(".endButtons").style.display="none";
    }

});

bin2.addEventListener("click",function(){
    let quantity1 = parseInt(selectElement1.value);
    total = priceShoe1 * quantity1;
    whereShowTotal.innerHTML="TOTAL: "+total.toFixed(2)+"€";
    document.getElementById("shoeBasket2").style.display="none";

    if(document.getElementById("shoeBasket1").style.display=="none"&&document.getElementById("shoeBasket2").style.display=="none"){
        whereShowTotal.innerHTML="NO ITEMS IN YOUR BAG";
        document.querySelector(".endButtons").style.display="none";
    }
})


const nextPageButton=document.getElementById("nextPage_pg3");
        nextPageButton.addEventListener("click",function(){
            window.location.href = "index.html";
        })



