const inventors = [
    { first: 'Albert', last: 'Einstein', age: 25 },
    { first: 'Isaac', last: 'Newton', age: 56 },
    { first: 'Galileo', last: 'Galilei', age: 76 },
    { first: 'Marie', last: 'Curie', age: 25 },
    { first: 'hello', last: 'world', age: 25 },
    { first: 'Johannes', last: 'Kepler', age: 80 }
];

//map function 
// combine name is first and last name

const output = inventors.map((x) => `${x.first} ${x.last}`)
console.table(output)

//reduce function
// count the age

const find = inventors.reduce(function (acc, current) {
    if (acc[current.age]) {
        acc[current.age]++;
    } else {
        acc[current.age] = 1
    }
    return acc;
}, {})
console.table(find)

// filter function
// find first name, whose age is less than 30

const data = inventors.filter(x => x.age < 30)

console.table("data", data)


//=========================================filter method================================================================

// const input = ["tata", "Sujuki", "skoda"]
// {tata :"tata" , "Sujuki":"Sujuki","skoda":"skoda"}

// const hello = input.reduce((acc, current) => {
//     acc[current] = current;
//     return acc;
// }, {})
// console.log(hello)

//===================================================================

// const filtered = [1,2,3,4,5,6]

// function isBigEnough(value) {
//   return value%2==1;
// }

// const output = filtered.filter((a) => a%2==0
//     // return a;
// );
// console.log(output)

//====================================================================

// const add = [23,45,43,23,15,12,45,23]

// function hello(value)
// {
//   return  value>=18;
// }
// const output = add.filter(hello)
// console.log(output)

//====================================================================

// const inventors = [
//     { first: 'Albert', last: 'Einstein', age: 25 },
//     { first: 'Isaac', last: 'Newton', age: 56 },
//     { first: 'Galileo', last: 'Galilei', age: 76 },
//     { first: 'Marie', last: 'Curie', age: 25 },
//     { first: 'hello', last: 'world', age: 25 },
//     { first: 'Johannes', last: 'Kepler', age: 80 }
// ];

// const data = inventors.filter(x => x.age>=60))
// console.log(data)

// const number = [1,-2,3,4,-5,-6,7,8,9,10]
// const data = number.filter(a => a>0
// {
//     b=a>0;
//     return b;

// }
// )
// console.log(data)

//================================================================

// const data = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
// // const output = [1,2,3,4,5,6]

// const output = data.filter((current, index) =>{
//     console.log("current",current)
//     console.log("index",index)
//     console.log("array",data)
//     return data.indexOf(current) === index;
// })
// console.log("output",output)

//============================================================================================

// const data = [1,2,3,4,5,6,7,8]

// function hello(num){
// {
//     if (num <= 1) {
//         return false;
//     }
//     if (num === 2) {
//         return true;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// }

// const output = data.filter(num => hello(num))
// console.log(output)

// const input = [0,1,"rohit","",undefined,null,5]

// function hello(value){
//     if(Boolean!=false){
//         return value
//     }
// }
// const output = input.filter((hello) => Boolean(hello) != false)
// console.log(output);

// const input = [1,2,3,4,5,6,7]

// const data = input.filter((a) => a!=1 && a!=7)
// console.log(data)

// const input = [
//                 {name:"tata", year:"2024"},
//                 {name:"honda", year:"2025"},
//                 {name:"skoda", year:"1990"},
//                 {name:"odi", year:"2023"},
//               ]

// const data = input.filter((a) => a.year>2020)  
// console.log(data)

// const input = [1,2,0,5,3,4,6]
// const output = [1,0,3,4,6]

// const output = input.filter((current, index) => {

//     if(input[index] === input.length-1)
//     {
//         return true
//     }else
//     {
//         if(input[index] <= input[index+1])
//         {
//             return true
//         }else
//         {
//             return false
//         }
//     }
// return input.indexOf(input[index])<=input[index+1];
// }
// )
// console.log(output)

//=====================================================================================================
// const input = [
//     { name: "tata", year: "2024" },
//     { name: "honda", year: "2025" },
//     { name: "skoda", year: "1990" },
//     { name: "odi", year: "2023" },
// ]

// function hello(name){

//     const output = input.filter(find => find.name == name);
//     // console.log(output);
//     return output
// } 
// console.log(hello("skoda"))

//=============================  map  =====================================

// const data = ["1.1", "2.2e2", "3e300"]
// const output = data.map((Number)); // [1, 2, 3]
// console.log(output)

// const number = [1,2,3,4,5]
// const output = number.map((num) => num>2)
// console.log(output)

//=========================================================
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index, array) => {
//   if (index < 3) {
//     return num;
//   }
// });
// console.log(filteredNumbers)

// function hello(num){
//     return num%2
// }
//=============================================================
// const number = [2,4,5,8,10,11]
// const output = number.map((value) => {
//     return value%2==0?value*2:value
// })
// console.log(output)

//===============================================================
// const persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"}
// ];

// const output = persons.map((x) => `${x.firstname} ${x.lastname}`)
// console.log(output)

//=============================================================
// var numbers = [1,7,9,21,32,77];
// const output = numbers.map(function(number, index){
//     return number * (index % 2 === 0 ? 2 : 3);
// });
// console.log(output)

// ===================================================================

// const hello = [1,2,3,4,5,6,15,9,6,11]
// output = [2,4,4,6,6,8,16,10,8,12]
// const output = hello.map((x) => {

//     if(x%2==1){
//       return x+1;
//     }else
//     {
//         return x+2;
//     }
// })
// console.log(output)

// ================================================================
// const input = [{name:"rohit"}, {name:"xyz"}, {name:"ABC"}]
// const output = input.map((x) => x)
// console.log(input)
// array = [];
// for(i=0;i<input.length;i++){
//     array.push(input[i])
// }
// console.log(array)

//==================================================   mix  =================================
// const array = [1,2,3,4,2,5,6,3]
// const output = [1,2,3,5,6]

// const output = array.filter((current, index) => {

//     //  console.log("current:",current)
//      if(array.indexOf(current)==index)
//      {
//         //  console.log("index",index)
//          return current
//      }
// })
// console.log(output)
//====================================================================
// arr=[];
// for(let i=0;i<array.length;i++)
// {
//     // console.log("i",i)
//     // console.log(arr.indexOf(array[i]))
//     console.log("array:",array
// const output = array1.[i])
//     if(arr.indexOf(array[i]) === -1){
//         arr.push(array[i]);
//     }
// }
// console.log(arr)

//====================================================================
// const array1 = [1,2,3,4,5,6]findIndex((x) => x>3)
// const output = array1.indexOf(5)
// const output = array1.lastIndexOf(5)
// const output = array1.reverse()
// const output = array1.join('~')
// const output = array1.sort((a, b) => a-b)
// const output = array1.pop()
// const output = array1.push(8)
// const output = array1.unshift(5)
// const output = array1.shift()
// const output = array1.slice(1,3)
// const output = array1.splice(1,2,6,7)

// const output = array1.splice(4,1)
// const output2 = array1.slice(4)
// console.log(array)
// console.log(output2)
// console.log(output)
//===============================================================================================

// const arr = ["a", "b", "c"]
// const output = arr.reduce((acc, current) => {
//     console.log("acc:-", acc)
//     console.log("current:-", current)
//     acc[current] = current;
//     console.log("acc[current]:-",acc[current])
//     return acc;
// }, {})
// console.log(output)

// const array = [{math:"90"}, {science:"40"},{physics:"90"},{computer:"60"}]

// const output1 = array.reduce((acc, current) => {
//         // console.log("current:-",current)
//         // console.log("acc:-",acc)
//         const count = Object.values(current)
//         // console.log(typeof count)
//         acc = acc+parseInt(count);
//         return acc
// },0)
// console.log(output1)

// const input = [{x:"A",y:"B"}, {x:"D", y:"E"}, {x:"Y",y:"Z"}]

// const output = input.map((item) => item.x+item.y)
// console.log(output)

//================================================================
// const array = [1,2,3,-6,-4,10]

// const output = array.filter((x) => x>0)
// const output1 = output.reduce((acc, current) => {
//     return acc + current
// })
// console.log(output1)
//=====================================================================
// const array = [1,2,3,4,5,6]

// const output = array.reduce((acc, current) => {
//     acc += current/array.length;

//     return acc
// },0)
// console.log(output)
//=====================================================================
// const input = "George Raymond Richard Martin";

// const output = input.split(" ").map((word) => word).join("")
// console.log(output)

//============================================================================

// const input = [{x:"A",y:"B"}, {x:"D", y:"E"}, {x:"Y",y:"Z"}]

// const output = input.map((item) => item.x+item.y)
// console.log(output)

// output = []; 
// for(let i in input){
//   output.push(input[i].x + input[i].y)
// }
// console.log(output)

//============================================================
// output = [];
// const output1 = input.forEach((item) => {
//     output.push(item.x + item.y)

// })
// console.log(output)

//=============================================================
// output=[];
// for(i=0;i<input.length;i++)
// {
//   output.push(input[i].x + input[i].y)
// }
// console.log(output)

//===============================================================
// const output1 = input.reduce((acc, current) => {
//     acc.push(current.x + current.y)
//     return acc;
// }, []) 
// console.log(output1)
//===============================================================

// const input = [5,8,15,3,2,1]
// const output = input.reduce((acc, current) => {
// })
// console.log(output)

// max=0;
// for(i=0;i<input.length;i++)
// {
//   if(max<input[i])
//   {
//     max=input[i]
//   }
// }
// console.log(max)

//===================================================================
// max=0;
// const output = input.forEach((item) => {
//     if(max<item)
//     {
//       max=item
//     }
// })
// console.log(max)

//==================================================================
// const input = [5,8,15,3,2,1]

// const output = input.reduce((acc, current) => {
//       console.log("acc:-",acc);
//       console.log("current:-",current);
//     if(acc>current)
//     {
//       return acc;
//     }else
//     {
//       return current;
//     }
// })
// console.log(output)
//================================================================
// const output = input.sort((a,b) => a-b)
// console.log(output[input.length-1])
// console.log(output)
//=================================================================
// const input = [{car:5}, {bike:3},{cycle:2},{car:2},{cycle:3},{bike:5}]


// const output = input.reduce((acc, current) => {
//           // console.log("acc",acc)
//     for (let key in current) {
//         // if (acc[obj]) {
//         //     acc[i] += obj[i];
//         // } else {
//         //     acc[i] = obj[i];
//         // }
//         console.log((current[key]))
//         acc[key] = (acc[key]) + current[key];
//         console.log("key:-", key)
//     }
//     return acc;
// }, {});

// console.log(output)

//=======================================================================================

// const array = [{name:"AB",startyear:1992, endyear:2024},
// {name:"SNP", startyear:1900, endyear:1999},
// {name:"PK", startyear:1950, endyear:1988} ]

// const output = array.reduce((acc, current) => {

//     const subtract = current.endyear - current.startyear;
//     const name = current.name;
//     // acc.push(subtract)
//     acc.push({name:name, subtract:subtract})

//   return acc
// },[])

// console.log("output:-",output)

//   const sorting = output.sort((a,b) => a.subtract-b.subtract)
//   console.log("sorting:-",sorting)

//   const adding = sorting.map((x) => x.name)
//   console.log("name:-",adding)

//=======================================================================================================
// const sorting = array.sort((a,b) => (a.endyear -  a.startyear)-(b.endyear -  b.startyear)) - short form
// const sorting = array.sort((a,b) => {
//     const firstItemGap =  a.endyear -  a.startyear
//     console.log("firstgap:-",firstItemGap)

//     const secondItemGap =  b.endyear -  b.startyear
//       console.log("secondgap:-",secondItemGap)

//     return  firstItemGap-secondItemGap
//   })
//   console.log("sorting:-",sorting)

//   const adding = sorting.map((x) => x.name)
//   console.log("name:-",adding)

//============================================================================================================
// const arr = ["a", "b", "c"]
// const output = arr.reduce((acc, current) => {
//     console.log("acc:-", acc)
//     console.log("current:-", current)
//     acc[current] = current;
//     return acc;
// }, [])
// console.log(output)

//============================================================================================

// const array = [{math:"90"}, {science:"40"},{physics:"90"},{computer:"60"}]

// const output1 = array.reduce((acc, current) => {
//         // console.log("current:-",current)
//         // console.log("acc:-",acc)
//         const count = Object.values(current)
//         // console.log(typeof count[0])
//         acc = acc+parseInt(count[0]);
//         return acc
// },0)
// console.log(output1)

//================================================================================================

// const input = [{ x: "A", y: "B" }, { x: "D", y: "E" }, { x: "Y", y: "Z" }]

// const output = input.map((item) => item.x + item.y)
// console.log(output)

//===========================================================================================$

// const input = [
//       { id: 111, name: 'John', age: 29 },
//       { id: 112, name: 'Sarah', age: 25 },
//       { id: 122, name: 'Kate', age: 22 },
//       { id: 123, name: 'Tom', age: 21 },
//       { id: 125, name: 'Emma', age: 24 },
// ]

// const output = input.reduce((acc, current) => {
//     console.log("acc:-",acc)
//     console.log("current:-",current)
//     acc[current.id] = current
//     return acc

// },{})
// console.log(output)

// =========================================================
// const input = [1,2,3,4,5,6,7,8,9,10,11,12,13]
//  const output = input.map((x) => {
//     if(x<10)
//     {
//         return "0"+x;
//     }else
//     {
//         return x;
//     }
// })
// console.log(output)

//=============================================================

    // const input = 
    // [{ id: 111, name: 'John', age: 29 },
    // { id: 112, name: 'Sarah', age: 25 },
    // { id: 113, name: 'Kate', age: 22 },
    // { id: 114, name: 'Tom', age: 21 },
    // { id: 115, name: 'Emma', age: 24 }]

    // const output = input.reduce((acc, current, index) => {

    //     if(index%2==0)
    //     {
    //       acc[current.name] = {id:current.id}

    //     }else
    //     {
    //       acc[current.name] = {age:current.age}
    //     }

    //     return acc
    // },{})
    // console.log(output)

//=================================================================================

// function myfunction(count, value) {
//     const output = [];

//     for (i = 0; i < count; i++) {
//         output.push(value)

//     }
//     return output;

// }

// console.log(myfunction(4, 'abc'))

//====================================================================================

// const items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];

// const output1 = items.sort((a, b) => b.name.localeCompare(a.name))
// console.log("output1:-", output1)

//=============================================================================================


// const a = [2,3,7,8,12,5,10,4]

// const output = a.reduce((acc, current,index) => {
//     console.log("acc",acc)
//     console.log("currnet",current)

//     a.map((x) => {
//     const sum = current + x;
//         if(sum == 15){
//         acc.push(current)
//     }
//     })
//     return acc;

// },[])
// console.log(output)

