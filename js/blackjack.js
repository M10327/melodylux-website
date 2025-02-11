
var bjCards = [];
var bjDealer = document.getElementById("bjDealerTray");
var bjPlayer = document.getElementById("bjPlayerTray");
var bjActive = false;
var bjDefaultAnimWait = 30;
var bjAnimWait = 0;
var bjCardSpeed = 10;
var bjWins = 0;
var bjLosses = 0;
function BJStart(){
    document.getElementById("bjButtonStart").style.display = "none";
    document.getElementById("bjButtonHit").style.display = "inline";
    document.getElementById("bjButtonSkip").style.display = "inline";
    bjCards = [];
    bjCardIndex = 0;
    bjDealer.innerHTML = "";
    bjPlayer.innerHTML = "";
    bjActive = true;
    bjAnimWait = 0;
    for (var i = 1; i < 14; i++){
        bjCards.push("Clubs " + i)
        bjCards.push("Diamonds " + i)
        bjCards.push("Hearts " + i)
        bjCards.push("Spades " + i)
    }
    BJInsertCard(true);
    BJHit();
    BJUpdateValues();
}

function BJInsertCard(dealer){
    var newDiv = document.createElement("img");
    newDiv.className = "blackjack-card";
    var cardname = BJGetRandomCard();
    newDiv.src = "images/PlayingCards/Card Back 1.png";
    newDiv.id = cardname;
    newDiv.style.transform = "rotateY(180deg)";
    if (dealer) bjDealer.appendChild(newDiv);
    else bjPlayer.appendChild(newDiv);
    BJAnimateFlip(cardname);
    bjCardIndex++;
}

function BJAnimateFlip(id){
    var card = document.getElementById(id);
    PlayRandomCardFlip();
    (function myLoop(i) {
        setTimeout(function () {
            card.style.transform = "rotateY(" + i + "deg)";
            if (i < 90 || i > 270) card.src = "images/PlayingCards/" + id + ".png";
            else card.src = "images/PlayingCards/Card Back 1.png";
            i += bjCardSpeed;
            if (i < 360) myLoop(i);
        }, 1)
    })(180);
}

function BJGetRandomCard(){
    let index = Math.floor(Math.random() * bjCards.length);
    let card = bjCards[index];
    bjCards.splice(index, 1);
    return card;
}

function BJCount(dealer){
    var cards;
    if (dealer) cards = bjDealer.getElementsByClassName("blackjack-card");
    else cards = bjPlayer.getElementsByClassName("blackjack-card");
    var low = 0;
    var high = 0;

    for (let index = 0; index < cards.length; ++index) {
        const element = cards[index];
        var num = parseInt(element.id.split(" ")[1]);
        if (num >= 11){
            low += 10;
            high += 10;
        }
        else if (num == 1){
            low += 1;
            high += 11;
        }
        else{
            low += num;
            high += num;
        }
    }
    if (low == high) return low;
    if (low != high){
        if (high <= 21) return high;
        else return low;
    }
}

function BJUpdateValues(){
    var dealer = BJCount(true);
    var player = BJCount(false);
    document.getElementById("bjDealer").innerHTML = "Dealer: " + dealer;
    document.getElementById("bjPlayer").innerHTML = "Player: " + player;
}

function BJCheckEnd(player, dealer){
    var win = true;
    if (player == 21) win = true;
    else if (dealer == 21) win = false;
    else if (player > 21) win = false;
    else if (dealer > 21) win = true;
    else if (dealer > player) win = false;
    else win = true;

    if (win){
        PlayAudio("holocure/snd_casino_win.wav", 0.3);
        document.getElementById("bjPlayer").innerHTML = "You Win! (" + player + ")";
        bjWins++;
    }
    else{
        PlayAudio("holocure/snd_casino_lose.wav", 0.3);
        document.getElementById("bjPlayer").innerHTML = "You lose... (" + player + ")";
        bjLosses++;
    }

    document.getElementById("bjButtonStart").style.display = "inline";
    document.getElementById("bjButtonHit").style.display = "none";
    document.getElementById("bjButtonSkip").style.display = "none";
    bjActive = false;
    document.getElementById("bjScore").innerHTML = "Wins: " + bjWins + " Losses: " + bjLosses;
}

function BJSkip(){
    if (!bjActive) return;
    if (bjAnimWait < bjDefaultAnimWait){
        bjAnimWait++;
        requestAnimationFrame(BJSkip);
        return;
    }
    bjAnimWait = 0;
    var dealer = BJCount(true);
    var player = BJCount(false);
    if (dealer <= player && dealer < 21){
        BJInsertCard(true);
        BJUpdateValues();
        requestAnimationFrame(BJSkip);
    }
    else{
        BJCheckEnd(player, dealer);
    }
}

function BJHit(){
    if (!bjActive) return;
    BJInsertCard(false);
    BJUpdateValues();
    var player = BJCount(false);
    if (player >= 21) BJCheckEnd(player, BJCount(true));
}

