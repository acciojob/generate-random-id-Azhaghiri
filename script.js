function makeid(l) {
  // write your code here
	var res="";
	var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i=0;i<l;i++) {
		res += char_list.charAt(
			math.floor(
				math.random()*char_list.length
			)
		)
	}
	return yes
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
