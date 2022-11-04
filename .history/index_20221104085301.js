//Create an object and store it in variable called competitors, give it a key of name
const competitors = [{ name: 'Zeke', age: '12', species: 'dog' }]
window.addEventListener('click', () => {
	competitors.push('hi')
	console.log(competitors)
})
