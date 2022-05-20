const cards = document.querySelectorAll(".card");
let disableDeck = false;
let matchcard = 0
let cardOne, cardTwo;

function flipCard(e) {
    let cliced  = e.target;
    if(cliced !== cardOne && !disableDeck){
        
   cliced.classList.add('flip');
    if(!cardOne){
        return cardOne = cliced
    }
    cardTwo = cliced
    disableDeck = true
            let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
          matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchcard ++
        if(matchcard  == 8 ){
  setTimeout(()=>{
      return shufacard()
 },1000)
 
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

        setTimeout(() => {
           cardOne.classList.add("shake")
 cardTwo.classList.add("shake")
        },400)
        
         setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false
    }, 1200);
 
    }
    function shufacard(){
        matchcard = 0 
        cardOne = cardTwo = ''
        disableDeck = false
        let arr= [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
        arr.sort(()=> Math.random() > 0.5 ? 1 : -1)
        cards.forEach((card, index) =>{
            card.classList.remove("flip")
            let imgtag = card.querySelector("img")
            imgtag.src =`img/img-${arr[index]}.png`
            card.addEventListener("click", flipCard)
        })
    }
    shufacard()

cards.forEach(card => {
    //  card.classList.add("flip")
    card.addEventListener("click", flipCard);
});