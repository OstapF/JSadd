// --створити масив з:
// - з 5 числових значень
//
// let number=[1,-5,0.1,12,-123]
//
// // - з 5 стічкових значень
// let string=['asf','adfa','qwe','sag','asd']
// // - з 5 значень стрічкового, числового та булевого типу
// let mas=[11,-12,'ads','qwe',true]
// // - та вивести його в консоль
//
// console.log(number);
// console.log(string);
// console.log(mas);
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let obj=[];
//  obj[0]=123;
//  obj[1]='adsfa'
//
// console.log(obj)
// //
// - є масив
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// let i=0;
// while (i<numbers.length){
//     console.log(numbers[i])
//     i++
// }
//     2. перебрати його циклом for
// for (const number of numbers) {
//     console.log(number)
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=1
// while (i<numbers.length){
//     console.log(numbers[i])
//     i+=2
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < numbers.length; i+=2) {
//     console.log( numbers[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0;
// while (i<numbers.length){
//     if (numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%2===0){
//         console.log(numbers[i])
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]%3===0){
//         numbers[i]='okten'
//     }
//     console.log(numbers[i])
// }
// 8. вивести масив в зворотньому порядку.
// for (let i = numbers.length-1; i >= 0; i--) {
//     console.log(numbers[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=numbers.length-1
// while (i>=0){
//     console.log(numbers[i-1])
//     i-=2
// }
// перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i =numbers.length-1; i >=0; i-=2) {
//     console.log(numbers[i-1])
// }
// перебрати циклом while та вивести  числа тільки парні  значення
// let i=numbers.length-1;
// while (i>=0){
//     if (numbers[i]%2===0){
//         console.log(numbers[i])
//     }
//     i--
// }
// перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = numbers.length-1; i >=0; i--) {
//     if (numbers[i]%2===0){
//      console.log(numbers[i])
//     }
// }

// замінити кожне число кратне 3 на слово "okten"
// let i=numbers.length-1
// while (i>=0){
//     if (numbers[i]%3===0){
//         numbers[i]='okten'
//
//     }
//     i--
// }
// console.log(numbers)
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers=[2,17,13,6,22,31,45,66,100,-18];
// let i=0
// while (i<numbers.length){
//     console.log(numbers[i])
//     i++
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let string=['asf','adfa','qwe','sag','asd','1321','das','132f','adfsf','1ds1'];
// for (const string1 of string) {
//     console.log(string1)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mas=[123,'adfa','qwe',-123,'asd',false,1,true,'adfsf','1ds1'];

// for (const masOne of mas) {
//     console.log(masOne)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mas=[123,'adfa','qwe',-123,'asd',false,1,true,'adfsf','1ds1'];
// for (const masOne of mas) {
//     if (typeof masOne==="boolean"){
//         console.log(`Boolean: `+masOne)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mas=[123,'adfa','qwe',-123,'asd',false,1,true,'adfsf','1ds1'];
// for (const ma of mas) {
//     if (typeof ma==="number"){
//         console.log(`Number: `+ma)
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mas=[123,'adfa','qwe',-123,'asd',false,1,true,'adfsf','1ds1'];
// for (const ma of mas) {
// if (typeof ma==="string"){
//     console.log(`String: `+ma)
// }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr=[];
// arr[0]='fas';
// arr[1]=123;
// arr[2]=true;
// arr[3]='ad';
// arr[4]=false;
// arr[5]='qwe';
// arr[6]=-1;
// arr[7]='ort';
// arr[8]=false;
// arr[9]='afg';
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 10; i++) {
//     console.log(`step:`+i);
//     document.write(`step:`+i+`<br>`);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(`step:`+i);
//     document.write(`step:`+i+`<br>`);
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i+=2) {
//     console.log(`step:`+i);
//     document.write(`step:`+i+`<br>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i%2===0){
//     console.log(`step:`+i);
//     document.write(`step:`+i+`<br>`);
// }}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i <= 100; i++) {
//     if (i%2!==0){
//         console.log(`step:`+i);
//         document.write(`step:`+i+`<br>`);
// }}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: "The Great Gatsby",
        pageCount: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Fiction", "Classic"]
    },
    {
        title: "To Kill a Mockingbird",
        pageCount: 281,
        authors: ["Harper Lee"],
        genres: ["Fiction", "Classic", "Drama"]
    },
    {
        title: "1984",
        pageCount: 328,
        authors: ["George Orwell","asdas"],
        genres: ["Fiction", "Dystopian"]
    }
];
// - знайти наібльшу книжку.
// let maxPage=0
// let mas=null
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.pageCount>0){
//         maxPage=book.pageCount
//         mas=book
//     }
// }
// console.log(mas.title)
// - знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenres=0;
// let mas=[]
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.genres.length>maxGenres){
//         maxGenres=book.genres
//         mas=book
//     }
//
// }
// console.log(mas.title)
// - знайти книжку/ки з найдовшою назвою
// let maxTitleLength=0
// let mas=null
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.title.length>maxTitleLength){
//         maxTitleLength=book.title.length
//         mas=book
//     }
// }
// console.log(mas.title);
// - знайти книжку/ки які писали 2 автори
// let mas=null
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.authors.length===2){
//         mas=book
//     }
// }
// console.log(mas.authors)

// - знайти книжку/ки які писав 1 автор

// let mas=[]
// for (let i = 0; i < books.length; i++) {
//     const book = books[i];
//     if (book.authors.length===1){
//         mas[mas.length]=book
//     }
// }
// console.log(mas)

