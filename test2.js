const reverseString = (str) => {
	const splited = str.split('')
	const reversed = splited.reverse().join('');
	return reversed
}
console.log(reverseString('hello'))
console.log(reverseString('Howdy'))