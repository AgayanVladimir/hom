function itemCounter(array) {
	let obj = {};
	array.forEach(element => {
		obj[element] = (obj[element] || 0) + 1
	});
	return obj;
}
console.log(itemCounter(["red", "gray", "green", "green", "gray", "gray"]));

//-------------------------------------------------------------------------------------

function summ(array) {

	let sum = array.reduce((a, b) => {
		return a + b;
	})
	return sum;

};

//-------------------------------------------------------------------------------------

console.log(summ([4, 6, 1, 2, -8, 7]));


function summToFirstZeroElem(arr) {

	let sum = arr.reduce((a, b) => {
		if (a === 0 || b === 0) {
			arr.splice(1);
		}
		return a + b;

	})
	return sum;
}

console.log(summToFirstZeroElem([4, 6, 1, 0, 2, -8, 7,]));

//--------------------------------------------------------------------------------------

const images = document.querySelectorAll('img');
const body = document.body;


images.forEach((element) => {
	element.addEventListener('click', () => {
		let imageUrl = element.src;
		deleteActiveClass();
		element.classList.add('active');
		body.style.background = `url('${imageUrl}')`;
		body.style.backgroundSize = 'cover';
		body.style.backgroundRepeat = 'no-repeat'
		localStorage.setItem('background', document.body.style.background);





	})
})




let WasIHere = '';
let backgroundUrl = localStorage.getItem('background');



try {
	WasIHere = localStorage.getItem('back');

} catch {
}

if (WasIHere == 1) {

	body.style.background = backgroundUrl;


} else {

	localStorage.setItem('back', '1');


}













function deleteActiveClass() {
	images.forEach((el) => {
		el.classList.remove('active')
	})
}

