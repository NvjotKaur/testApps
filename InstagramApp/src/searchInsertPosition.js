
function search(num, val){
	if(num.includes(val)){
		return num.indexOf(val)


	}

	else if(num!= val){
		num.push(val);
		num.sort((a,b) => a-b);
		console.log(num)
		return num.indexOf(val);
	}

	

}
// var searchInsert = function(nums, target) {
//    let exist = nums.indexOf(target); 
//    if( exist !== -1) return exist;
//    nums.push(target);
//    nums.sort((a,b) => a-b);
//    return nums.indexOf(target);
// };
console.log(search([2,4,3,6,9,5], 6))

console.log(search([2,3,4,5,6,7,9],1))

console.log(search([3,5,7,9,10],8));

console.log(search([1,3,5,6],2))




