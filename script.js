
document.addEventListener('DOMContentLoaded',()=>{

//crate options

    const cardArrya=[
        {
            name:'aba',
            img:'images/aba.png'
            
        },
        {
            name:'aba',
            img:'images/aba.png'
            
        },
        {
            name:'alem',
            img:'images/alem.png'
            
        },
        {
            name:'alem',
            img:'images/alem.png'
            
        },
        {
            name:'priel',
            img:'images/priel.png'
        },
        {
            name:'priel',
            img:'images/priel.png'
        },
        {
            name:'nana',
            img:'images/nana.png'
        },
        {
            name:'nana',
            img:'images/nana.png'
        },
        {
            name:'matan',
            img:'images/matan.png'
        },
        {
            name:'matan',
            img:'images/matan.png'
        },
        {
            name:'haim',
            img:'images/haim.png'
        },
        {
            name:'haim',
            img:'images/haim.png'
        },
        {
            name:'liem',
            img:'images/liem.png'
        },
        {
            name:'liem',
            img:'images/liem.png'
        },{
            name:'ariel',
            img:'images/ariel.png'
        },
        {
            name:'ariel',
            img:'images/ariel.png'
        },{
            name:'fam',
            img:'images/fam.png'
        },
        {
            name:'fam',
            img:'images/fam.png'
        },{
            name:'israel',
            img:'images/israel.png'
        },
        {
            name:'israel',
            img:'images/israel.png'
        },{
            name:'havtam',
            img:'images/havtam.png'
        },
        {
            name:'havtam',
            img:'images/havtam.png'
        },{
            name:'matan_1',
            img:'images/matan_1.png'
        },
        {
            name:'matan_1',
            img:'images/matan_1.png'
        },{
            name:'aba_1',
            img:'images/aba_1.png'
        },
        {
            name:'aba_1',
            img:'images/aba_1.png'
        },{
            name:'priel_1',
            img:'images/priel_1.png'
        },
        {
            name:'priel_1',
            img:'images/priel_1.png'
        },{
            name:'sosha',
            img:'images/sosha.png'
        },
        {
            name:'sosha',
            img:'images/sosha.png'
        },{
            name:'fam_1',
            img:'images/fam_1.png'
        },
        {
            name:'fam_1',
            img:'images/fam_1.png'
        }

    ]

cardArrya.sort(()=>0.5 - Math.random())


    const grid=document.querySelector(".grid");

    let resultDisplay=document.querySelector("#result");
    
let cardsChosen=[];
let cardsChosenId=[];
let cardWon=[];


//creat your board

function creatBoard() {
    for (let i = 0; i < cardArrya.length; i++) {
        let card=document.createElement('img');
        card.setAttribute('src','images/bk.jpg');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}


//check for matches

function checkForMatch() {
    
    let cards=document.querySelectorAll('img');
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert("כל הכבוד חמודים..");
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardWon.push(cardsChosen)

    }else{
        cards[optionOneId].setAttribute('src','images/bk.jpg');
        cards[optionTwoId].setAttribute('src','images/bk.jpg');
        alert("נסו שוב..")
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardWon.length;
    if(cardWon.length===cardArrya.length/2)
    resultDisplay.textContent='Congratulation! You found the them all!'
}

//flip your card

function flipCard() {
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArrya[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArrya[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch,500)
    }

}
creatBoard()

}

)

