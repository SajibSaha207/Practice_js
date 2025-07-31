// for (i=0; i <= 200; i++){
//     if(i > 100){
//         break;
//          }
//     console.log(i);
   
// }

let i = 1;
let sum = 0;
while (i <= 200){
    sum += i;
    i++;
if (sum >= 100){
    break;
}

}
console.log("Total sum: ", sum);
console.log("Stooped at i =", i);