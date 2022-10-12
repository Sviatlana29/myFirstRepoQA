function updateLight(current) {
  let array = ["green","yellow","red"]
  let result = ''
  
  for(let i = 0; i < array.length; i++){
    if(current == array[i]){
      result += array[i+1]
     }
    }
   return result
}

console.log(updateLight('red'))

2,5,1






// let n = 'minutes 5'
// for (let i = 0; i < n.length; i++){
//     if(n[i] != 1){
//       console.log(true) 
//     }
//   }

  // let res = 1
  // let f = 10
  
  // for (let i = 1; i < f; i++){
  //           res += 2
  // }
  // console.log(res)

// let arr  = ['number', 4 , true, null]
//   for (let i = 0; i < arr.length; i++){
//         if (typeof(arr[i]) == 'boolean') {
//           console.log(arr[i])
//         }
//       }

//       console.log(typeof(true))

// let a = 2;
// console.log(a % 2 ? 'Odd' : 'Even')


// 1892376 => 1+8+9+2+3+7+6 = 36 

// let n = 1892376
// let sum = n + ''
      
//       for (let i = 0; i < n.length; i++){
//         sum += sum[i]
//       }
//         console.log(sum);