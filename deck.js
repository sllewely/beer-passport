
var deck = {
    cards: []
};

for( var i = 1; i < 11; i++) {
    deck.cards[(i-1)*4] = i.toString() + "&#x2661;";
    deck.cards[(i-1)*4+1] = i.toString() + "&#x2662;";
    deck.cards[(i-1)*4+2] = i.toString() + "&#x2664;";
    deck.cards[(i-1)*4+3] = i.toString() + "&#x2667;";
}
deck.cards[40] = "J&#x2661;";
deck.cards[41] = "J&#x2662;";
deck.cards[42] = "J&#x2664;";
deck.cards[43] = "J&#x2667;";
deck.cards[44] = "Q&#x2661;";
deck.cards[45] = "Q&#x2662;";
deck.cards[46] = "Q&#x2664;";
deck.cards[47] = "Q&#x2667;";
deck.cards[48] = "K&#x2661;";
deck.cards[49] = "K&#x2662;";
deck.cards[50] = "K&#x2664;";
deck.cards[51] = "K&#x2667;";


function drawCard(){
    //alert(deck.cards[18]);
    var cardNo = (Math.floor(Math.random()*52));
    var card = deck.cards[cardNo];
    document.getElementById("draw_card").innerHTML= card;
    document.getElementById("debugging").innerHTML = cardNo;
    jQuery.isArray(deck.cards);
};

function jsTests(){
    document.getElementById("outputs").innerHTML= jQuery.isArray(deck.cards);
};

$( document ).ready( function() {
    alert("alalala");
    jQuery("#debugging").addClass("styled");
    jQuery('#docready').innerHTML = "alalalala";
});