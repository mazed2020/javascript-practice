
// initial value check only one time after that check condition repeatedly after that increment value more more
// for(let i=0; i<10;  i++){
//     console.log(`outer loop ${i}`)
//     for(let j=0; j<10; j++){
//         console.log(`inner loop value print ${j}`)
//     }
// }

// let i=0;
// while(i<10){
//     console.log( `print just its value ${i}`);
//     i++;
// }

//  loop for (for of),for in ;


// for of loop in javascript
// const arr=[1,2,4,5,5];
// for(let value of arr){
//     console.log(value);
// }
// const map=new Map();
// map.set('mazed',23);
// map.set('mahfuz',24);
// map.set('masaid',34);
// console.log(map)
// for(let name of map){
//     console.log(name[1]);
// }

// const obj={
//     name:'mazed',
//     age:23,
//     village:"baliyapara"
// }
// for(let value of obj){
//     console.log(value);
// }
/*============
for of loop work:
array,map,
it not work in object;
*/
// for of loop in javascript
// const arr=[1,2,4,5,5];
// for(let value in arr){
//     console.log(value, arr[value]);
// }


// const map=new Map();
// map.set('mazed',23);
// map.set('mahfuz',24);
// map.set('masaid',34);
// // console.log(map)
// for(let name in map){
//     console.log(name);
// }

// const obj={
//     name:'mazed',
//     age:23,
//     village:"baliyapara"
// }
// for(let key in obj){
//     console.log(key,obj[key]);
// }

/*============
for in loop work:
array,obj,
it not work in map data structure in javascipt;
*/

// forEach loop javascript]
//forEach loop pass three parameter into callback function in javascript (element,index,arr)
// let arr=[1,3,4,5,6];

// arr.forEach((element,index,arr) => {
//     console.log(element,index,arr)
// });
// array fliter
// let arr=[1,3,4,5,6];
// const fliterValue=arr.filter((item)=> item>4);
// console.log(fliterValue)
//if i taking scope here thats why must be return here otherwise it not work

// const fliterValue=arr.filter((item)=> {
//     item>4;
// });
// console.log(fliterValue)

// const fliterValue=arr.filter((item)=> {
//    return item>4;
// });
// console.log(fliterValue)

// let arr=[1,3,4,5,6];
// const arr1= arr.slice(3,5)
// console.log(arr1);
// let arr=[1,3,4,5,6];
// const mapval=arr.map((item)=>item*10);
// console.log(mapval);
