function makeid(l) {
  // write your code here
	let res = '' 
	let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for(let i=0;i<l;i++){
		res += char.charAt(Math.floor(Math.random()*char.length))
	}
	return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
