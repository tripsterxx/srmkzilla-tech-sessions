const oddeven = require("./oddeven");

//q1
// string manipulation normal function.
function stringManipulation() {
	let str = "aakash rawat";
	console.log(str.slice(0, 6));
}
stringManipulation();

// array manipualation arrow function.
const arrayManipulation = (arr = ["hello", "there"]) => {
	console.log(arr.join());
};

const array = ["im", "aakash"];
arrayManipulation(array);
arrayManipulation();

//q2
oddeven(4);

//q3
function arrayNumAddeer(n, arr = [1, 3, 5]) {
	for (i = 0; i < arr.length; i++) {
		arr[i] += n;
	}
	console.log(arr);
}

console.log("array number adder");
arrayNumAddeer(2, [1, 3, 7]);
