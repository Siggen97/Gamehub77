
const loader = document.getElementById('preLoader');
window.addEventListener('load', function () {
	loader.style.display = 'none';
});

var a;
function show_hide () {
	if (a==1){
		document.getElementsByTagName('nav')[0].style.display = 'flex';
		return a=0
	}
	else {
		document.getElementsByTagName('nav')[0].style.display = 'none';
		return a=1
	}
}

