	var loop = "";

for (var i = 0; i < 7; i++) {
	loop = loop + "x";
	console.log(loop);
}

var rapper = ['wrapper, napper, clapper, mapper, slacker, dapper, snapper, crapper, lapper, trapper']

console.log('')

console.log('Chance the')

$(document).ready(function(){

	for (var i = 0; i< rapper.length; i++){
		console.log (rapper[i]);
		$('.printRapper').append(rapper[i]);
	}
});