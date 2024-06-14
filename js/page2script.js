SliderHeader=document.getElementById("Slider");
let numberView=["0","1","2","3","4","5","6","7"];
let viewShoe=document.querySelectorAll("#shoesImgList ul div");
let bigShow=document.querySelector("#bigShow div");
let currentNumberView=7; /*  IMMAGINE MOSTRATA DI DEFAULT*/
let sizes= [
    "38.5",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "42.5",
    "43",
    "44",
    "44.5",
    "45",
    "45.5",
    "46",
    "47",
    "47.5",
    "48.5",
    "49.5"];

ListSeparator();

let Interval=setInterval(changeSlide,3000);


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

/* ----------------------------------------TUTTI GLI ONCLICK*/
viewShoe[1].onclick=function(){                                     /* PASSANO IL PARAMETRO A SHOWVIEW PER CAMBIARE VISUALE*/
showView(parseInt(numberView[1]));
};
viewShoe[2].onclick=function(){
    showView(parseInt(numberView[2]));

    };
    viewShoe[3].onclick=function(){
        showView(parseInt(numberView[3]));
        };
        viewShoe[4].onclick=function(){
            showView(parseInt(numberView[4]));
            };
            viewShoe[5].onclick=function(){
                showView(parseInt(numberView[5]));
                };
                viewShoe[6].onclick=function(){
                    showView(parseInt(numberView[6]));
                    };
                    viewShoe[7].onclick=function(){
                        showView(parseInt(numberView[7]));
                        };
                            viewShoe[0].onclick=function(){
                                showView(parseInt(numberView[0]));
                                };
/*------------------------------------------------------------------GESTIONE DEI DUE BOTTONI */
document.querySelectorAll("#bigShow .buttons button")[0].onclick=function(){
    let parameterToPass;
    if (currentNumberView==0){ 
parameterToPass=numberView.length-1;
    }
    else{
    parameterToPass=currentNumberView-1;
    }
    showView(parameterToPass);
}

document.querySelectorAll("#bigShow .buttons button")[1].onclick=function(){
    let parameterToPass;
    if (currentNumberView==numberView.length-1){ 
parameterToPass=0;
    }
    else{
    parameterToPass=currentNumberView+1;
    }
    showView(parameterToPass);
}

///////////////////////////////////////////////////////////////// FUNZIONE CAMBIA VISTA SCARPA
function showView(number){
  let numberInt=(parseInt(number));
    if(numberInt!=0){
bigShow.style.backgroundImage=`url('Img/Scarpa_2/${numberInt}.jpg')`;
bigShow.innerHTML="";
    }else{
        bigShow.innerHTML="<video width='432px' height='540px' autoplay muted loop><source src='Img/Scarpa_2/video.mp4' type='video/mp4'></video>"
    }
    currentNumberView=number;

    for(let i=0;i<numberView.length;i++){
        if(viewShoe[i].classList.contains("border"))
        {
            viewShoe[i].classList.remove("border");
            viewShoe[number].classList.add("border");
        }
    }
}

/*------------------------------------------------------------------ GESTIONE MISURE SCARPE*/
let whereToInsertSizes=document.getElementById("whereToInsertSizes");
let defaultSize=7;  /* TAGLIA 43*/

let chosenSize;

for(let counter=0;counter<sizes.length;counter++){
    if(counter==defaultSize){   /* CREA CODICE DELLA SIZE DI DEFAULT*/
        whereToInsertSizes.innerHTML+=`<div class="sizesBox clickable styleSelectedSize">${sizes[counter]} EU</div>`;
    }else{                   /* CREA CODICE DELLE ALTRE SIZE*/
    whereToInsertSizes.innerHTML+=`<div class="sizesBox clickable">${sizes[counter]} EU</div>`;
    }
}

/*--------------------------------------------CLICK SU MISURE*/


for(let i=0;i<sizes.length;i++){
    whereToInsertSizes.querySelectorAll("div")[i].addEventListener("click",function(){

        chosenSize= whereToInsertSizes.querySelectorAll("div")[i].textContent;
        /*    RIMUOVI CLASSE DELLA SCARPA SCELTA*/
        for(let j=0;j<sizes.length;j++){
            whereToInsertSizes.querySelectorAll("div")[j].classList.remove("styleSelectedSize");
        }
        
        whereToInsertSizes.querySelectorAll("div")[i].classList.add("styleSelectedSize"); 

    });
}


/*--------------------------------------------AGGIUNTA AL BASKET*/
let sizeStringChosen;
let addToBagButton=document.getElementById("realButton");
let coverUnderBasket=document.getElementById("coverUnderBasket");
let basket=document.getElementById("itemAdded");

addToBagButton.addEventListener("click",function()
{
for(let i =0;i<document.querySelectorAll("div").length;i++){
    if(document.querySelectorAll("div")[i].classList.contains("styleSelectedSize")){
    sizeStringChosen=document.querySelectorAll("div")[i].textContent;
    }
    document.querySelector(".sizeBasket").innerHTML=`Size: ${sizeStringChosen}`;
}
/*----------------------------------------COMPARSA BASKET*/
basket.style.display="block";
coverUnderBasket.style.display="block";

});

document.querySelector("#itemAdded button").addEventListener("click",function(){
    basket.style.display="none";
    coverUnderBasket.style.display="none";
})

//   MOSTRA PAGINE DEMO
const nextPageButton=document.getElementById("nextPage_pg2");
        nextPageButton.addEventListener("click",function(){
            window.location.href = "page3.html";
        })

