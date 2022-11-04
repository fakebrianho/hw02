//Create an object and store it in variable called competitors, give it a key of name
const competitors = [
	{ name: 'Zeke', age: 12, species: 'dog', score: 82 },
	{ name: 'Bobby', age: 14, species: 'dog', score: 78 },
	{ name: 'Joe', age: 11, species: 'cat', score: 90 },
	{ name: 'John', age: 14, species: 'dog', score: 22 },
]

const setupButtons = () => {
	const increase = document.querySelector('#button1')
	const decrease = document.querySelector('#button2')
	increase.addEventListener('click', increase)
	decrease.addEventListener('click', decrease)
}
