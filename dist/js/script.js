var path = document.querySelector('.st1');
var length = path.getTotalLength();
path.style.transition = path.style.WebkitTransition = 'none';
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
path.getBoundingClientRect();

var path2 = document.querySelector('.st2');
var length = path2.getTotalLength();
path2.style.transition = path2.style.WebkitTransition = 'none';
path2.style.strokeDasharray = length + ' ' + length;
path2.style.strokeDashoffset = length;
path2.getBoundingClientRect();

var path3 = document.querySelector('.st3');
var length = path3.getTotalLength();
path3.style.transition = path3.style.WebkitTransition = 'none';
path3.style.strokeDasharray = length + ' ' + length;
path3.style.strokeDashoffset = length;
path3.getBoundingClientRect();

firstLine()
secondLine()
function firstLine() {
	path.style.transition = path.style.WebkitTransition =
	'stroke-dashoffset 1.5s ease-in-out';
	path.style.strokeDashoffset = '0';
	setTimeout(animateWords, 1000)

}
function secondLine() {
	path2.style.transition = path2.style.WebkitTransition =
	'stroke-dashoffset 1s ease-in-out';
	path2.style.strokeDashoffset = '0';
	setTimeout(thirdLine, 500)
}
function thirdLine() {
	path3.style.transition = path3.style.WebkitTransition =
	'stroke-dashoffset 1s ease-in-out';
	path3.style.strokeDashoffset = '0';
}

function animateWords(){
	$('.animated').removeClass('hidden')
	$('.animated').attr('class','animated fadeInDown')
}