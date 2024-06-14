SliderHeader=document.getElementById("Slider");

/*------------------------------------------------------------DICHIARAZIONE VARIABILI GLOBALI SCARPE*/

let firstWindow=document.querySelector("#showShoes .shoesWrapper .firstWindow .imgShoe");
let secondWindow=document.querySelector("#showShoes .shoesWrapper .secondWindow .imgShoe");
let thirdWindow=document.querySelector("#showShoes .shoesWrapper .thirdWindow .imgShoe");
let Ashoes=["1","2","3","4","5","6","7","8"];
let nameShoes=["Nike Dunk Low Medium Olive","Nike Air Force 1 Low '07","Nike Dunk Low Smoke Grey","Nike Air Force 1 '07 (WOMEN)","Air Jordan 1 Mid Panda","Air Max Plus Black","Nike Dunk Low Panda","Nike Dunk Low Silver (WOMEN)"];
let typeShoes=["Men's Shoes","Men's Shoes","Men's Shoes","Women's Shoes","Men's Shoes","Kid's Shoes","Men's Shoes","Women's Shoes"];
let priceShoes=["125,99","119,99","129,99","99,99","109,99","69,99","159,99","89,99"];
let buttonLeft=document.querySelectorAll(".shoesButtons button")[0];
let buttonRight=document.querySelectorAll(".shoesButtons button")[1];
let shoesFirstCounter=0;   /* ad ogni click di scorrimento aumentera' o diminuira' di uno
/*------------------------------------------------------------INFORMAZIONI SCARPE DI DEFAULT*/
/*    PRIMA SCARPA */
firstWindow.style.backgroundImage="url('Img/Home-page/scarpa_"+Ashoes[shoesFirstCounter]+".jpg')";
let firstName=firstWindow.nextElementSibling.querySelectorAll("p")[0];
firstName.innerHTML=nameShoes[shoesFirstCounter];
let firstType=firstWindow.nextElementSibling.querySelectorAll(".descriptionPrice p")[1];
firstType.innerHTML=typeShoes[shoesFirstCounter]
let firstPrice=firstWindow.nextElementSibling.querySelectorAll(".descriptionPrice p")[2];
firstPrice.innerHTML=priceShoes[shoesFirstCounter]+"€";

/*    SECONDA SCARPA */
secondWindow.style.backgroundImage="url('Img/Home-page/scarpa_"+Ashoes[shoesFirstCounter+1]+".jpg')";
let secondName=secondWindow.nextElementSibling.querySelectorAll("p")[0];
secondName.innerHTML=nameShoes[shoesFirstCounter+1];
let secondType=secondWindow.nextElementSibling.querySelectorAll(".descriptionPrice p")[1];
secondType.innerHTML=typeShoes[shoesFirstCounter+1]
let secondPrice=secondWindow.nextElementSibling.querySelectorAll(".descriptionPrice p")[2];
secondPrice.innerHTML=priceShoes[shoesFirstCounter+1]+"€";

/*    TERZA SCARPA */
thirdWindow.style.backgroundImage="url('Img/Home-page/scarpa_"+Ashoes[shoesFirstCounter+2]+".jpg')";
let thirdName=thirdWindow.nextElementSibling.querySelectorAll("p")[0];
thirdName.innerHTML=nameShoes[shoesFirstCounter+2];
let thirdType=thirdWindow.nextElementSibling.querySelectorAll(".descriptionPrice p")[1];
thirdType.innerHTML=typeShoes[shoesFirstCounter+2]
let thirdPrice=thirdWindow.nextElementSibling.querySelectorAll(".descriptionPrice p")[2];
thirdPrice.innerHTML=priceShoes[shoesFirstCounter+2]+"€";


////////////////////////////////////////////////////////////////////////////////////////// /*  SPORT  */
/*------------------------------------------------------------DICHIARAZIONE VARIABILI GLOBALI SPORT*/
let S_firstWindow=document.querySelector("#showSport .sportWrapper .firstWindow .imgSport");
let S_secondWindow=document.querySelector("#showSport .sportWrapper .secondWindow .imgSport");
let S_thirdWindow=document.querySelector("#showSport .sportWrapper .thirdWindow .imgSport");
let Asport=["1","2","3","4","5","6"];
let nameSport=["Football","Dance","Basketball","Tennis","Training and gym","Running"];
let S_buttonLeft=document.querySelectorAll(".sportButtons button")[0];
let S_buttonRight=document.querySelectorAll(".sportButtons button")[1];
let sportFirstCounter=0;

/*------------------------------------------------------------INFORMAZIONI SPORT DI DEFAULT*/

/*    PRIMO SPORT */
S_firstWindow.style.backgroundImage="url('Img/Home-page/sport_"+Asport[sportFirstCounter]+".jpg')";
let S_firstName=S_firstWindow.nextElementSibling.querySelectorAll("p")[0];
S_firstName.innerHTML=nameSport[sportFirstCounter];
/*    SECONDO SPORT */
S_secondWindow.style.backgroundImage="url('Img/Home-page/sport_"+Asport[sportFirstCounter+1]+".jpg')";
let S_secondName=S_secondWindow.nextElementSibling.querySelectorAll("p")[0];
S_secondName.innerHTML=nameSport[sportFirstCounter+1];
/*    TERZO SPORT */
S_thirdWindow.style.backgroundImage="url('Img/Home-page/sport_"+Asport[sportFirstCounter+2]+".jpg')";
let S_thirdName=S_thirdWindow.nextElementSibling.querySelectorAll("p")[0];
S_thirdName.innerHTML=nameSport[sportFirstCounter+2];

////////////////////////////////////////////////////////////////////////////////////////// /*  ADVERTS  */
/*------------------------------------------------------------DICHIARAZIONE VARIABILI GLOBALI ADVERTS*/
let AD_firstWindow=document.querySelector("#showAd .adWrapper .firstWindow .imgAd");
let AD_secondWindow=document.querySelector("#showAd .adWrapper .secondWindow .imgAd");
let AD_thirdWindow=document.querySelector("#showAd .adWrapper .thirdWindow .imgAd");
let AAdvert=["1","2","3","4","5","6"];
let AD_buttonLeft=document.querySelectorAll(".adButtons button")[0];
let AD_buttonRight=document.querySelectorAll(".adButtons button")[1];
let adFirstCounter=0;

/*------------------------------------------------------------INFORMAZIONI ADVERTS DI DEFAULT*/

/*    PRIMO AD */
AD_firstWindow.style.backgroundImage="url('Img/Home-page/banner_"+AAdvert[adFirstCounter]+".jpg')";
/*    SECONDO AD */
AD_secondWindow.style.backgroundImage="url('Img/Home-page/banner_"+AAdvert[adFirstCounter+1]+".jpg')";
/*    TERZO AD */
AD_thirdWindow.style.backgroundImage="url('Img/Home-page/banner_"+AAdvert[adFirstCounter+2]+".jpg')";


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
//////////////////////////////////////////////////////////////////////  SCARPE  //////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////// BOTTONI SCORRI SCARPE

buttonRight.addEventListener("click",function(){                                    /*BOTTONI SLIDER SCARPE*/
    if(shoesFirstCounter+3<Ashoes.length){
shoesFirstCounter++;
putShoesInfo();
}  
colorButtons(shoesFirstCounter);
});

buttonLeft.addEventListener("click",function(){
    if(shoesFirstCounter>0){
        shoesFirstCounter--;
 putShoesInfo();
}
colorButtons(shoesFirstCounter);
});

                                                          /* PASSAGGIO INFORMAZIONI SCARPE CON CONTATORE */
function putShoesInfo(){
    firstWindow.style.backgroundImage="url('Img/Home-page/scarpa_"+Ashoes[shoesFirstCounter]+".jpg')";
    firstName.innerHTML=nameShoes[shoesFirstCounter];
    firstType.innerHTML=typeShoes[shoesFirstCounter];
firstPrice.innerHTML=priceShoes[shoesFirstCounter]+"€";

secondWindow.style.backgroundImage="url('Img/Home-page/scarpa_"+Ashoes[shoesFirstCounter+1]+".jpg')";
secondName.innerHTML=nameShoes[shoesFirstCounter+1];
secondType.innerHTML=typeShoes[shoesFirstCounter+1];
secondPrice.innerHTML=priceShoes[shoesFirstCounter+1]+"€";

thirdWindow.style.backgroundImage="url('Img/Home-page/scarpa_"+Ashoes[shoesFirstCounter+2]+".jpg')";
thirdName.innerHTML=nameShoes[shoesFirstCounter+2];
thirdType.innerHTML=typeShoes[shoesFirstCounter+2];
thirdPrice.innerHTML=priceShoes[shoesFirstCounter+2]+"€";
}


/////////////////////////////////////////////////////// COLORE BOTTONI SCORRI SCARPE

function colorButtons(shoesCounter){
if(shoesCounter>0){
    buttonLeft.style.backgroundColor="#F2F2F2";
    buttonLeft.style.color="rgb(85, 85, 85)";

}else if(shoesCounter<1){
    buttonLeft.style.backgroundColor="rgba(251, 251, 251, 0.885)";
    buttonLeft.style.color="rgb(234, 239, 243)";
}

if(shoesCounter>Ashoes.length-4){
buttonRight.style.backgroundColor="rgba(251, 251, 251, 0.885)";
buttonRight.style.color="rgb(234, 239, 243)";
}else{
    buttonRight.style.backgroundColor="#F2F2F2";
    buttonRight.style.color="rgb(85, 85, 85)";
}
}

//////////////////////////////////////////////////////////////////////  SPORT  //////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////// BOTTONI SCORRI SPORT

S_buttonRight.addEventListener("click",function(){
    if(sportFirstCounter+3<Asport.length){
sportFirstCounter++;
putSportInfo();
}  
S_colorButtons(sportFirstCounter);
});

S_buttonLeft.addEventListener("click",function(){
    if(sportFirstCounter>0){
        sportFirstCounter--;
 putSportInfo();
}
S_colorButtons(sportFirstCounter);
});


function putSportInfo(){
    S_firstWindow.style.backgroundImage="url('Img/Home-page/sport_"+Asport[sportFirstCounter]+".jpg')";
    S_firstName.innerHTML=nameSport[sportFirstCounter];


S_secondWindow.style.backgroundImage="url('Img/Home-page/sport_"+Asport[sportFirstCounter+1]+".jpg')";
S_secondName.innerHTML=nameSport[sportFirstCounter+1];

S_thirdWindow.style.backgroundImage="url('Img/Home-page/sport_"+Asport[sportFirstCounter+2]+".jpg')";
S_thirdName.innerHTML=nameSport[sportFirstCounter+2];

}
/////////////////////////////////////////////////////// COLORE BOTTONI SCORRI SPORT
function S_colorButtons(sportCounter){
    if(sportCounter>0){
        S_buttonLeft.style.backgroundColor="#F2F2F2";
        S_buttonLeft.style.color="rgb(85, 85, 85)";
    
    }else if(sportCounter<1){
        S_buttonLeft.style.backgroundColor="rgba(251, 251, 251, 0.885)";
        S_buttonLeft.style.color="rgb(234, 239, 243)";
    }
    
    if(sportCounter>Asport.length-4){
    S_buttonRight.style.backgroundColor="rgba(251, 251, 251, 0.885)";
    S_buttonRight.style.color="rgb(234, 239, 243)";
    }else{
        S_buttonRight.style.backgroundColor="#F2F2F2";
        S_buttonRight.style.color="rgb(85, 85, 85)";
    }
    }

    //////////////////////////////////////////////////////////////////////  ADVERTS  //////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////// BOTTONI SCORRI ADVERTS

AD_buttonRight.addEventListener("click",function(){
    if(adFirstCounter+3<AAdvert.length){
adFirstCounter++;
putAdInfo();
}  
AD_colorButtons(adFirstCounter);
});

AD_buttonLeft.addEventListener("click",function(){
    if(adFirstCounter>0){
        adFirstCounter--;
 putAdInfo();
}
AD_colorButtons(adFirstCounter);
});


function putAdInfo(){
AD_firstWindow.style.backgroundImage="url('Img/Home-page/banner_"+AAdvert[adFirstCounter]+".jpg')";
AD_secondWindow.style.backgroundImage="url('Img/Home-page/banner_"+AAdvert[adFirstCounter+1]+".jpg')";
AD_thirdWindow.style.backgroundImage="url('Img/Home-page/banner_"+AAdvert[adFirstCounter+2]+".jpg')";

}
/////////////////////////////////////////////////////// COLORE BOTTONI SCORRI ADVERTS
function AD_colorButtons(adCounter){
    if(adCounter>0){
        AD_buttonLeft.style.backgroundColor="#F2F2F2";
        AD_buttonLeft.style.color="rgb(85, 85, 85)";
    
    }else if(adCounter<1){
        AD_buttonLeft.style.backgroundColor="rgba(251, 251, 251, 0.885)";
        AD_buttonLeft.style.color="rgb(234, 239, 243)";
    }
    
    if(adCounter>AAdvert.length-4){
    AD_buttonRight.style.backgroundColor="rgba(251, 251, 251, 0.885)";
    AD_buttonRight.style.color="rgb(234, 239, 243)";
    }else{
        AD_buttonRight.style.backgroundColor="#F2F2F2";
        AD_buttonRight.style.color="rgb(85, 85, 85)";
    }
    }

    //   MOSTRA PAGINE DEMO
   const nextPageButton=document.getElementById("nextPage");
        nextPageButton.addEventListener("click",function(){
            window.location.href = "page2.html";
        })