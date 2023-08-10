///////////IIFE
(() => {
    /*
    * we need to create a deck of cards; we need an array of objects , with the cards in order , with the characteristics of the card with in the object such as (number/character , value ,suit)
    *
    * create a player hand and computer hand; empty array for each starting off, then use .push,.remove for adding and removing cards, and a accumulator to keep track of the sum of the array
    *
    * display dealers hand and players hand(one of the dealers cards will be hidden); this is going to have to have a array and only show ONE index of that array and not show the other
    *
    * if either player or dealer is dealt 21, they win, if anything more that 21 they lose, its called a bust and you lose, if you BOTH get 21 its a draw; need an if/else statement for loop, while loop maybe ? saying if or while this condition is true (being either player or dealer is under 21 , the 'statement' is equal to true) , then returns false once the hand goes over 21 ending the game
    *
    * methods : hit- is for when you want to be issued a card from the dealer
    *           stand - is when you are satisfied with your cards , both you and dealer have to stand to show cards to each other; maybe a function to call when player enters the "stand" keyword? haulting the drawing of their cards to the array and stopping the accumulator , thought of a loop but im not sure that would work?
    *
    * we need do a shuffle; to shuffle we would need a math.random to have a different shuffle everytime, with a new array of the cards shuffled? making a copy of the original deck just shuffled ?
    *
    * if the dealer gets to 17 they automatically have to stand; we would need another loop of if/else statement, checking to see if dealers hand is equal to 17 everytime they grab a card, if they are equal the loop stops and stops the accumulator for the dealer
    *
    * */


    //Global
    let playerHand = [];
    let dealerHand = [];
    let deckOfCards = [];
    let bust;
    let win;

    //Functions
    function play() {

    }

    function shuffleCards() {


    }

    function sumOfDeck() {


    }

    function addingCardsToPlayerHand() {


    }

    function removeCardsFromPlayerHand() {

    }

    function addingCardsToDealerHand() {


    }

    function removingCardsToDealerHand() {


    }




    //Event Listeners


})