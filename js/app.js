function flip(card) { 
	console.log (card)
	document.getElementById(card).style.transform= 'rotateY(180deg)'
	if (document.getElementById(card).style.transform==='rotateY(180deg)') {
		setTimeout(function () {document.getElementById(
			card).style.transform= 'rotateY(0deg)';
		}, 1000);
	}
}


var card = [];
card[0] = '/assets/626.jpg';
card[1] = '/assets/254.jpg';
card[2] = '/assets/slushy.jpg';
card[3] = '/assets/sandwich.jpg';
card[4] = '/assets/sandwich.jpg';
card[5] = '/assets/slushy.jpg';
card[6] = 'assets/626.jpg';
card[7] = 'assets/254.jpg';

var clicks = 0; 
var firstSelect; 
var secondSelect;
var match = 0;
var cardBack = "/assets/valentines-day-heart-clip-art-33947.jpg";