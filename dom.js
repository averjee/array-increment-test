
//const arr = [3, 2, 1, 2, 7];
//1,2,2,3,7
//1,2,3,3,7
//1,2,3,4,7

const arr = [2, 2, 2, 2, 2];
//2,2,2,2,2
//2,2,2,2,3
//2,2,2,3,3
//2,2,3,3,3
//2,3,3,3,3
//2,3,3,3,4
//2,3,3,4,4
//2,3,4,4,4
//2,3,4,4,5
//2,3,4,5,5
//2,3,4,5,6

//const arr = [12, 7, 7, 22, 292, 22, 12, 1, 1, 1, 2, 2, 3, 7, 8, 9];

//getMinimumUniqueSum(arr);
console.log("array sum", getMinimumUniqueSum(arr));

function getMinimumUniqueSum(arr) {
  
  console.log("array initial sort", arr.sort((a, b) => a - b));

  restartLoop:
  while(true){
    for (let i = 0; i < arr.length - 1; i++) {
    
      //if current num is equal to next num then increment next num
      if (arr[i] === arr[i + 1]){
        arr[i + 1] = arr[i + 1] + 1;
        console.log(i, arr);
        arr.sort();
        console.log("sorted: ", i, arr.sort((a, b) => a - b));
        continue restartLoop;
      }
      
      
    }
    console.log("final array sorted", arr.sort((a, b) => a - b));

  //returning sum of numbers in array
  return arr.reduce((sum, number) => sum + number, 0)
  }
  
}