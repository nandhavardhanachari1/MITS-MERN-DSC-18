// console.log("Hello World!!");
// // Reinitialize and Redeclare
// var a; //Global Scope
// a = 10;
// var a;
// a = 20;
// // Reinitialize
// let b = 10; // Block Scope
// // let b;
// b = 20;
// // Can't Redeclare or Reinitialize
// const c = 30; //Block Scope
// console.log(a);
// console.log(b);
// console.log(c);

// // Datatypes
// var num = 10; // number
// var str = "vikraam"; // `` '' "" //string
// var bool = true; //boolean
// var un; //undefined
// var nu = null; //Object (Js Bug)
// var big = 12345678909864n; //BigInt
// var symbol = Symbol('li'); //symbol

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);

// var arr = [1,2,3,4,5] //array
// console.log(arr);
// console.log(typeof arr);

// var Obj = {
//     name:"vikraam",
//     dept:"DS"
// } //Object
// console.log(Obj);
// console.log(typeof Obj);

// //  Arithmatic Operator

// var a = 10;
// var b ="2";
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(a*b);
// console.log(a**b);

// // Relational Operator

// var a = 10;
// var b = 20;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// //logical (&&,||,!)
// var a = true;
// var b = false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a)

// //Control Statement
// // Conditional Statement (if, if...else, else if, switch)
// //if (Even)
// var a  = 10;
// if(a%2===0){
//     console.log("Even");
// }
// // if...else (Odd or Even)
// if(a%2===0){
//     console.log(`${a} is Even`); //Templet Literal
// }
// else{
//     console.log(`${a} is Odd`);
// }
// // else...if
// var mark = 80;
// if(mark>90) {
//     console.log("O Grade");
// }
// else if(mark>70){
//     console.log("A Grade");
// }
// else if(mark>35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// }
// //Terinary Operator (condition? true : false)
// var a = 5;
// const result = (a%2===0) ? `${a} is Even` : `${a} is Odd`;
// console.log(result);

// var mark = 80;
// const Grade = (mark>90) ? `O Grade` : (mark>70) ? "A Grade" : (mark>35) ? "Pass" : "Fail";
// console.log(Grade);
// //switch
// var day = 6;
// switch(day){
//     case 1: {
//         console.log("Sunday");
//         break;
//     }
//     case 2: {
//         console.log("Monday");
//         break;
//     }
//     case 3: {
//         console.log("Tuesday");
//         break;
//     }
//     case 4: {
//         console.log("Wednesday");
//         break;
//     }
//     case 5: {
//         console.log("Thursday");
//         break;
//     }
//     case 6: {
//         console.log("Friday");
//         break;
//     }
//     case 7: {
//         console.log("Saturday");
//         break;
//     }
//     default:{
//         console.log("Invalid Day");
//     }
// }
// // Looping Statement (for,while,do...while)
// //for Loop
// for(let i= 0;i<=10;i++){ //initialization;condition;increment/Decrement
//     console.log(i);//statement
// }
// //while Loop
// var num = 1234;
// var count=0;
// while(num>0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count);
// // do...while
// var a = 0;
// do{
//     console.log("Example Do while");
// }while(a!==0);

// //Normal function
// function add(){
//     var a = 10;
//     var b = 20;
//     console.log(a+b);
// }
// add();
// //With parameter
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// //with return type
// function add(a,b){
//     return a+b;
// }
// var result=add(10,20);
// console.log(result);

// //Arrow Function (ES6)
// var add = () => {
//     console.log("Arrow Function")
// }
// add();

// //with parameter
// var add = (a=0,b=0) =>{
//     console.log(a+b);
// }
// add(10,20);
// //with return
// var add = (a,b)=>{
//     return a+b;
// }
// console.log(add(10,20))

// //CallBack Funcion
// var add = (a,b,demo)=>{
//     var c = a+b;
//     demo(c);
// }
// var result = (res) =>{
//     console.log(res);
// }
// add(10,20,result)
// //Example 2
// var add = (a,b,demo)=>{
//     var c = a+b;
//     demo(c);
// }
// add(10,20,(res) =>{
//     console.log(res);
// })
// add(10,20,(res)=>{
//     for(let i=1;i<=res;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// })

// //Spread Operator (...) (ES6)
// var arr = [1,2,3];
// var arr2 = [...arr,4,5,6];
// console.log(arr);
// console.log(arr2);

// //Destructuring Operator (ES6)
// var [m1,m2,m3,m4,m5] =[99,98,97,98,96]; //Array
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var {name,age,dept,contact} = { //Object
//     name:"Vikraam",
//     age:24,
//     dept:["DS","CS"],
//     contact:{
//         mobile:9876543210,
//         mail:'vikraam17@gmail.com'
//     }
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(contact);

// //for..in (ES6)
// var arr = [10,20,30,40]; // Array
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj = { //Object
//     name:"vikraam",
//     age:24,
//     isActive:true
// }
// for(let key in obj){
//     console.log(key,obj[key])
// }

// //for...of (ES6)
// var arr = [10,20,30,40];
// for(let val of arr){
//     console.log(val);
// }
// //forEach (ES6)
// arr.forEach((val,index)=>{
//     console.log(val,index);
// })

// var arr = [1,2,3,4,5];
// //Map
// var double = arr.map((val)=>(val*2));
// console.log(double)

// //Filter
// var even = arr.filter((val)=>(val%2===0));
// console.log(even);

// //reduce
// var total = arr.reduce((sum,val)=>(sum+val),0);
// console.log(total);

// var result = arr.map((val)=>val**2).filter((val)=>val%2===0)
// .reduce((sum,val)=>(sum+val),0);
// console.log(result);

// //Hoisting
// //var a;
// console.log(a);
// var a =10;
// // For let & const Hositing not possible

// add(); //function hoisting
// function add(){
//     console.log(10+20);
// }

//Scope

// //Global Scope
// //var
// var a = 10; //Global scope
// if(true){
//     var b =20; //Block scope
// }
// console.log(a);
// console.log(b);

// //Block scope
// // let
// let a =10; //Global Scope
// if(true){
//     let b =20; //Block Scope
// }
// console.log(a);
// console.log(b);

// // const
// const i =10; //Global Scope
// if(true){
//     const j =20; //Block Scope
// }
// console.log(i);
// console.log(j);

// //Promise (ES6)

// const promise = new Promise((resolve,reject)=>{
//     var success = true;
//     if(success){
//         resolve("Task complted");
//     }
//     else{
//         reject("Task not completed");
//     }
// })
// promise.then((message)=>{
//     console.log(message);
// }).catch((err)=>{
//     console.log(err);
// })

// //setTimeout
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     var success = true;
//     if (success) {
//       resolve("Task complted");
//     } else {
//       reject("Task not completed");
//     }
//   }, 5000);
// });
// promise.then((msg) => console.log(msg))
// .catch((err) => console.log(err));

// //setInterval
// var count = 1;
// const IntervalCount = setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count>5){
//         clearInterval(IntervalCount)
//     }
// },2000);

// //fetch

// const getData = ()=>{
//     return fetch("https://jsonplaceholder.typicode.com/users")
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

//async and await
const getData = async()=>{
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
}
getData();