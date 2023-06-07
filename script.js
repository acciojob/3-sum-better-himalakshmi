
 function threeSum(arr, target) {
// write your code here
  arr.sort((a,b)=>a-b);
	let ans = arr[0]+arr[1]+arr[2];
	for(let i=0;i<arr.length-2;i++){
		let start = i+1, end = arr.length-1;
		while(start<end){
			const sum = arr[i]+arr[start]+arr[end];
			if(sum>target){
				end--;
			}else{
				start++;
			}
			if(Math.abs(target-sum)<Math.abs(target-ans)){
				ans=sum;
			}
		}
	}
	 return threeeSum(S,target);