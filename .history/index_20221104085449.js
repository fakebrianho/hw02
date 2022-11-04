//Create an object and store it in variable called competitors, give it a key of name
const competitors = [
	{ name: 'Zeke', age: 12, species: 'dog' },
	{ name: 'Bobby', age: 14, species: 'dog' },
	{ name: 'Joe', age: 11, species: 'cat' },
]
window.addEventListener('click', () => {
	competitors.push('hi')
	console.log(competitors)
})
