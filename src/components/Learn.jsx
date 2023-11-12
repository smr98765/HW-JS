//HW-JS
//Hw-9 
//  ask = (guestion, yes, no) => { 
//     if (confirm(guestion) ){ 
//         yes() 
//     } 
     
//     else no() 
// } 
// ask ( 
//     'Вы согласны?', 
//      () => { 
//         alert('Вы согласились.') 
//     }, 
//     () => { 
//         alert('Вы отменили выполнение.') 
//     } 
// ); 
 
 
 
//---------------------------------------------------------- 
// function run() { 
//     let message = 7 
//     console.log(message); 
// } 
 
// run() 
 
 
 
//----------------------------------------------------------- 
// function run() {                 //expression функция 
//     const                        // өзгөрүлбөс переменный 
//     message =                    // переменныйдын аты 
//     'Беги Форрест, беги'         // значение "string" 
//     if                           // условный оператор 
//     (true)                       // логический тип 
//     {                            // 
//         const                     // "Бубба"Лок.область.con.log чыкпайт,анткени сырттан чакырылды.  
//         friend =                  //     
//         'Бубба'                   // 'Беги Форрест, беги' Глоб.обл. блоктун ичинен да сыртынан да чакырса болот 
//          console.log(message);    // 
//     }                              
//     console.log( friend);          
// }  
// run()


//HW-10 
//------------------HW1--------------------------- 
// for (let i = 0; i <= 100; i++) { 
//     console.log(i); 
     
// } 
 
 
 
 
//------------------HW2--------------------------- 
// for (let i = 100; i >= 0; i--) { 
//     console.log(i); 
     
// } 
 
 
//-------------------HW3-------------------------- 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// for (let i = 2; i < arr.length; i++) { 
//  if(i % 2 == 0) continue   
//     alert(i); 
// } 
 
 
//--------------------HW7---      -------------------- 
// let arr = [1,2, 7, 8, 3, 9, 4, 5] 
// let sum = 0 
// for (let i = 0; i < arr.length; i++) { 
//  sum  += arr[i] 
// } 
//  console.log(sum); 
 
 
//-------------------HW8-------------------------- 
// let arr = [2, 3, 4, 5] 
// let sum = 1 
// for (let i = 0; i < arr.length; i++) { 
// sum *= arr[i] 
// } console.log(sum);
//HW-11 
// Символ "!" 
// let arr = ['Umar', 'Kanat', 'Syimyk'] 
// let result = arr.map ((item) =>{ 
// return item +'!'  
// }) 
// console.log(result); 
 
//--------------------------------------------------------------- 
//Переверните символы каждой строки в обратном порядке. 
// let arr = ['Umar', 'Kanat', 'Syimyk'] 
// let result = arr.map((item, index, array) =>{ 
//    return item.split('').reverse().join('') 
 
// }) 
// console.log(result); 
 
 
 
 
//--------------------------    ------------------------------------- 
// Дан массив с числами. Оставьте в нем только положительные числа. 
// let arr = [-1, -2, -3, -4, -5, 6, 7, 8, 9, 10] 
// let num = arr.forEach((item) =>{ 
// if(item > 0){ 
//     console.log(item); 
// } 
// }) 
//  console.log(num); 
 
 
//Дан массив с числами. Оставьте в нем только отрицательные числа. 
// let arr2 = [-1, -2, -3, -4, -5, 6, 7, 8, 9, 10] 
// let num = arr2.forEach((item) =>{ 
//     if(item < 0){ 
//         console.log(item); 
//     } 
//     }) 
//      console.log(num); 
 
 
//Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10. 
// let arr3 = [1, 2, 3, 10, 11, 12] 
// arr3.forEach(item => { 
//     if (item > 0 && item < 10) { 
//         console.log(item); 
//     } 
// }) 
 
 
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. 
// let users = ['Syimyk','Umar'] 
// let result = users.filter((users) => users.length > 5) 
// console.log(result); 
 
 
// Дан массив числами. Посчитайте количество отр-х чисел в этом массиве. 
// let arr2 = [-1, -2, -3, -4, -5, 6, 7, 8, 9, 10] 
// let users = arr2.filter((el) => { 
//     return el < 0 
// }) 
// console.log(users.length);
//HW-12 
// let arr = [1, 2, 3, 4, 5] 
// function func (num1, num2, num3, num4, num5){    
// console.log(num1 + num2 + num3 + num4 + num5);     
// } 
// func(...arr) 
 
 
//------------------------------------------------------ 
// let arr = [1, 2, 3, 4, 5] 
// console.log(Math.min(...arr)); 
 
 
 
//------------------------------------------------------- 
 
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]; 
// let [name, surname, department, position, salary] = arr 
// console.log(name); 
// console.log(surname); 
// console.log(department); 
// console.log(position); 
// console.log(salary); 
 
//-------------------------------------------------------- 
 
// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]; 
// let [,,department, position,]= arr 
// console.log(department); 
// console.log(position); 
 
//--------------------------------------------------------- 
// let options = { 
//     color: 'red', 
//     width: 400, 
//     height: 500, 
// } 
// let {color, width, height} = options 
// console.log(color); 
// console.log(width); 
// console.log(height); 
 
// ---------------------------------------------------------- 
// let options = { 
//     color: 'red', 
//     width: 400, 
//     height: 500, 
// } 
// let {color:c, width:w, height:h} = options 
// console.log(c); 
// console.log(w); 
// console.log(h); 
 
 
 
 
 
 
 
 
// Не запуская код, определите, что выведется в консоль 
 
// function func(n1, n2, n3, n4, n5, n6, n7, n8){ 
//     return(n1 + n2+ n3 + n4) * (n5 + n6 + n7 +n8); 
// } 
// console.log(func(1, ... [2,3,4],5, ...[6], ...[7,8])); 
 
//-------------------------------------- 
// let arr1 = [1, 2, 3]; 
// let arr2 = [4, 5, 6]; 
// let arr = ['a', ...arr1, 'b', 'c', ...arr2] 
// console.log(arr); 
 
//--------------------------------------------- 
// let arr1 = [1, 2, 3]; 
// let arr2 = [4, 5, 6]; 
// let arr = ['a', ...arr1,...arr1, 'b', 'c'] 
// console.log(arr); 
 
//------------------------------------------- 
// let arr1 = [1, 2, 3]; 
// let arr2 = [...arr1, 4, 5, 6]; 
// let arr = ['a', 'b', 'c', ...arr2] 
// console.log(arr); 
//------------------------------------------------- 
 
// let arr1 = [1, 2, 3]; 
// let arr2 = [...arr1, 4, 5, 6]; 
// let arr3 = [...arr2, 7, 8, 9] 
// let arr = [0,...arr3] 
// console.log(arr);
//HW-13 
// let bodyElement = document.body 
// 1 
// let elem = document.getElementById('age-table') 
// console.log(elem); 
 
// 2 
// let elem2 = bodyElement.querySelectorAll('label') 
// console.log(elem2); 
 
// 3 
// let elem3 =bodyElement.querySelector('td') 
// console.log(elem3); 
 
// 4 
// let elem4 = bodyElement.firstChild 
// console.log(elem4); 
 
// 5 
// let elem5 = bodyElement.querySelector('input') 
// console.log(elem5); 
 
//6 
// let elem6 = bodyElement.querySelectorAll('[type = "submit"]') 
// console.log(elem6); 
 
 
 
//-------------------------------------------------------------------- 
// let bodyElement = document.body 
// 1 
// let elem7 = bodyElement.getElementsByTagName('div') 
// console.log(elem7); 
 
// 2 
// let elem8 = bodyElement.getElementsByTagName('ul') 
// console.log(elem8); 
 
//3 
// let elem9 = document.querySelector('li') 
// let el = elem9.textContent 
// console.log(el);
//HW-15 
// let calc = document.querySelector('.calc') 
// let result = document.querySelector('#result') 
// calc.addEventListener('click', function(event){ 
//    if(!event.target.classList.contains('calc_btn')) return; 
 
//    let value = event.target.innerText; 
//    switch (value) { 
//     case '=': 
         
//         break; 
    
//     default: 
//         break; 
//    } 
//    result.innerText += value 
// })
//HW-15(1) 
// let op; 
// function func() { 
//   let result; 
//   let num1 = Number(document.getElementById("num1").value); 
//   let num2 = Number(document.getElementById("num2").value); 
      
// switch (op) { 
//   case '+': 
//   result = num1 + num2; 
//   break; 
//   case '-': 
//   result = num1 - num2; 
//   break; 
//   case '*': 
//   result = num1 * num2; 
//   break; 
//   case '/': 
//   result = num1 / num2; 
//   break; 
   
// } 
 
//   document.getElementById("result").innerHTML = result; 
// }
 
  //HW-15(1) calculator 
// <!DOCTYPE html> 
// <html lang="ru"> 
// <head> 
//   <meta charset="utf-8"> 
//   <title>Home15_js</title> 
//   <link rel="stylesheet" href="./style.css"> 
// </head> 
// <body> 
// <div class="div"> 
//     <h1>CALCULATOR</h1> 
// <input id="num1" /> 
//   <div id="calculator"> 
//     <button id="oper" onclick="op='+'">+</button> 
//     <button id="oper" onclick="op='-'">-</button> 
//     <button id="oper" onclick="op='*'">*</button> 
//     <button id="oper" onclick="op='/'">/</button> 
//   </div> 
//   <input id="num2" /><br> 
//     <button class="ravno" onclick="func()">=</button> 
//     <p id="result"></p> 
// </div> 
//   <script src="./script.js"></script> 
//   </body> 
// </html> 


/*  
//HW15(1) calculator 
* { 
    margin: auto; 
    box-sizing: border-box; 
} 
// 
 
.div { 
    width: 400px; 
    margin: auto; 
    height: 300px; 
    box-shadow: 10px 8px 10px rgba(4, 43, 45, 0.948); 
    margin-top: 50px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    background-image: url(https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80); 
    background-repeat: no-repeat; 
    background-size: cover; 
} 
 
#num1 { 
    text-align: center; 
    background-color: rgba(230, 141, 78, 0.289); 
    border: 0; 
    padding: 8px; 
    border-radius: 8px; 
    color: #fff; 
    outline: none; 
    transition: all 0.2s ease; 
    box-shadow: 2px 3px 5px rgb(4, 43, 45); 
} 
 
#num1:active { 
    background-color: rgb(150, 68, 9); 
    transform: scale(0.96); 
} 
 
#num2 { 
    background-color: rgba(230, 141, 78, 0.467); 
    border: 0; 
    padding: 8px; 
    border-radius: 8px; 
    color: #fff; 
    outline: none; 
    transition: all 0.2s ease; 
    box-shadow: 2px 3px 5px rgb(4, 43, 45); 
    text-align: center; 
} 
 
#num2:active { 
    background-color: rgb(150, 68, 9); 
    transform: scale(0.96); 
} 
 
#result { 
    text-align: center; 
    background-color: rgba(230, 141, 78, 0.46); 
    border: 0; 
    padding: 9px; 
    border-radius: 8px; 
    color: #fff; 
    outline: none; 
    transition: all 0.2s ease; 
    box-shadow: 2px 3px 5px rgb(4, 43, 45); 
} 
 
#result:active { 
    background-color: rgb(150, 68, 9); 
    transform: scale(0.96); 
} 
 
#oper { 
    color: #fff; 
    padding: 8px 22px; 
    border-radius: 8px; 
    background-color: cadetblue; 
    transition: all 0.2s ease; 
    border: 0; 
    margin-bottom: 15px; 
    box-shadow: 2px 3px 5px rgb(4, 43, 45); 
} 
 
#oper:active { 
    background-color: rgb(4, 43, 45); 
    transform: scale(0.96); 
} 
 
.ravno { 
    display: flex; 
    margin-bottom: 15px; 
    color: #fff; 
    padding: 8px 22px; 
    border-radius: 8px; 
    background-color: cadetblue; 
    transition: all 0.2s ease; 
    border: 0; 
    box-shadow: 2px 3px 5px rgb(4, 43, 45); 
} 
 
.ravno:active { 
    background-color: rgb(4, 43, 45); 
    transform: scale(0.96); 
} 
 
.div>h1 { 
    color: darkgray; 
} */
//Hw1 
// let currentResult = 20 
// currentResult = currentResult + 10 
 
// let calculationNumbers = "${currentResult}" "players" 
 
 
// console.log(calculationNumbers); 
 
// Типы данных 
 
// let num = 5 //number 
// console.log(num); 
 
// let big = 3456789876545678967473825666643n //bigint 
// console.log(big); 
 
// let str = "Hello" // "", '',`` 
// console.log(str); //string 
 
// let bool = true // true- chyndyk, false- jalgan 
// console.log(bool); // boolean 
 
// let n = null //null 
// console.log(n); 
 
// let a = unerfined //undefined 
// console.log(a); 
 
// console.log(+ 1 + 0); 1 
// console.log(-1 + 0 ); -1 
// console.log (true + false); 1 
// console.log(6 / "3"); 63 
// console.log ("2" * "3"); 23 
// console.log (4 + 5 + "px");9px 
// console.log("$" + 4 + 5); $9 
// console.log("4" - 2); 42 
// console.log("4px" - 2); 4px2 
// console.log(7 / 0); 7 
// console.log(" -9" + 5); -95 
// console.log(" -9" - 5); -9 
// console.log(null + 1); null 
// console.log(undefined + 1); undefined 
// console.log("\t \n" -2); \t \n -2
//Hw-18 
//    let photoId = +prompt('Photo Id?') 
// fetch(`https://jsonplaceholder.typicode.com/users/${photoId}`) 
// .then((res)=> res.json()) 
// .then((users) =>{ 
//     new Promise((res, rej)=>{ 
//         let user1 = document.createElement('p1') 
//         user1.innerHTML = users.id  
//         let user2 = document.createElement('p2') 
//         user2.innerHTML = users.name 
//         let user3 = document.createElement('p3') 
//         user3.innerHTML = users.username 
//         let user4 = document.createElement('p4') 
//         user4.innerHTML = users.email 
 
 
//         document.body.append(user1) 
//         document.body.append(user2) 
//         document.body.append(user3) 
//         document.body.append(user4) 
//     }) 
// })

 
