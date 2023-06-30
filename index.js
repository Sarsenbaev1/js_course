// const a = 10;

// const b = "abc";
// // console.log(a + b);
// const ObjectA = {
//   a: 10,
//   b: true,
// };
// const copyOfA = ObjectA;
// copyOfA.a = 20;
// copyOfA.c = "abcsss";
// console.log(ObjectA.c);
// //
// function a() {
//   console.log("Hey there");
// }
// a();
// a = 10;
// a();
// const a = () => {
//   console.log("hey thehe");
// };
// a();
// a = 10;

// const myCity = {
//   city: "New York",
//   info: {
//     isPopular: true,
//     country: "USA",
//   },
// };
// console.log(myCity.info.isPopular);
// delete myCity.info["isPopular"];
// console.log(myCity);

const name22 = "Maksat";
const postsQty = 18;
const userProfile = {
  name22, //эквивалентно name22:name22
  postsQty, //эквивалентно postsQty:postsQty
  hasaSignedAgreement: false,
};

const myCity = {
  city: "New York",
  cityGreeting() {
    console.log("Greetings!!!");
  },
};

console.log(myCity);
myCity.cityGreeting();
console.log("\n\n");

//                                                  JavaScript Object Notation Формат обена данными

const post = {
  title: "My post",
  likesQty: 5,
};
//JSON.parse(); //конвертировать из JSON в JS объект
//JSON.stringify(); // конвертировать из js объекта в JSON

const postStringified = JSON.stringify(post);
console.log(postStringified);
console.log(JSON.parse(postStringified));
console.log("\n\n");

//                                                               Мутация в JavaScript

// Мутирование копий
// const person = {
//   name: "BOB",
//   age: 22,
// };

// const person2 = person;
// person2.age = 26;
// person2.isAdult = true;
// console.log(person.age);//26
// console.log(person.isAdult);// true

// как избежать мутаций
const person = {
  name: "BOB",
  age: 25,
};
const person2 = Object.assign({}, person); // вариант 1 для избежания мутаций
person2.age = 26;
console.log(person2.age); //26
console.log(person.age); //25

// вариант 2
const person3 = { ...person }; // ... - это оператор разделения объекта на совйства
person3.name = "alice";
console.log(person3.name); //   alice
console.log(person.name); //BOB

// вариант 3
const person4 = JSON.parse(JSON.stringify(person)); // конвертация в объект потом в строку . ССылка на влрженные объекты не сохраняется
person4.name = "STASik";
console.log(person4.name); // STASik
console.log(person.name); //BOB
console.log("\n\n");

//                                                     ФУНКЦИИ
/*функция может быть...
...именованной 
...присвоена переменной
...анонимной
...аргумент при вызове другой функции
... значением свойства (метода) объекта
                                                Функция - это объект
*/

function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
console.log(myFn(10, 3)); // 14
console.log("\n\n");
//                                        передача значения по ссылке
const personOne = {
  name: "Bob",
  age: 21,
};
function increasePersonAge(person) {
  person.age += 1;
  return person;
}
increasePersonAge(personOne);
console.log(personOne.age); //22
//Внутри функции не рекомендуется мутировать внешнее объекты

const personOne1 = {
  name: "Bob",
  age: 21,
};
function increasePersonAge1(person) {
  const updatedPerson = Object.assign({}, person);
  updatedPerson.age += 1;
  return updatedPerson;
}

const updatedPersonOne1 = increasePersonAge1(personOne1);
console.log(personOne1.age); //21
console.log(updatedPersonOne1.age); //22
// колбэк функции      одна функция вызывает внутри чебя другую функцию

function printMyName() {
  console.log("Maksat");
}
console.log("start");
setTimeout(printMyName, 5000); // встроенная функция , Функция printMyName будет вызвана через 5000 миллисекунд

/*                                            Правила работы с функциями
1.Называть функции исходя из выполняемых задач
2. Одна функция должна выполнятьодну задачу
3. Не рекомендуется изменять внешние относительно функции переменные*/

//область видимости
//глобальная область видимости - объявлены в глобальной области видимости
// локальная область видимости - объявлены в локальной области видимости

let a1;
let b;
function myFn11() {
  let b;
  a1 = true; //Области видимости переменная "а1" будет объявлена в глобальной области видимости
  b = 10;
  console.log(b); //10
}

myFn11(); // не рекомендуется
console.log(a1); //true
console.log(b); //undifined
/*                           Правила работы с переменными
        1.Все переменные объявлять перед их использованием 
        2. Стараться использовать const везде, где это возиожно
        3. Внутри функций не изменять переменные с внешних областей видимости*/

//                              СТРОГИЙ РЕЖИМ 'use strict - запрещает использование необъявленных переменных'
"use strict"
function myFun() {
  aa = true; //uncaught ReferenceError: aa is not defined at myFun
  console.log(aa)
}
myFun();
console.log(aa);
//                                            Операторы
// * / + -    && || !  > <  >=  <=  !==   ===
// a++ прибавляет единицу
// +а - инвертировать например : строку в число

//                                            Текстовые операторы
// typeof                                 instanceof                             new                              delete
// delete obj.a - удаляет объект
//  typeof a можно узнать тип переменной
// new Object() можно создать новый экземпляр объекта

//                                                      лОГИЧЕСКИЕ ОПЕРАТОРЫ
// !-НЕ                &&-И                   ||-ИЛИ

//                                                            ЛОЖНЫЕ ЗНАЧЕНИЯ
// false,                0,                  '',              undefined,          null- явное отсутствие значения

//                                                              ОПЕРАТОРЫ && И ||
//                  ВЫРОЖЕНИЕ 1 &&  ВЫРОЖЕНИЕ 2
/*
Если выражение 1 ложно:
1. Выражение 2 игнорируется
2. Возвращается результат выражения 1 

                        ВЫРОЖЕНИЕ 1 \\  ВЫРОЖЕНИЕ 2
Если выражение 1 истинно:
1. Выражение 2 игнорируется 
2. Возвращается результат выражения 1*/

let brrr = 10;
brrr && console.log("vyipolneno"); // vipolneno

let brrrr;
brrrr && console.log("vipolneno"); // undefined

//                                                              ОПЕРАТОР РАЗДЕЛЕНИИЯ ОБЪЕКТА НА СВОЙСТВА
//                                          ОПЕРАТОР ...
const button = {
  width: 200,
  text: "Buy",
};

const redButton = {
  ...button,
  color: "red",
};
console.table(redButton);
// примерр 2
const buttonInfo = {
  text: "Buy",
};
const buttonStyle = {
  color: "yellow",
  width: 200,
  height: 300,
};
const button1 = {
  ...buttonInfo,
  ...buttonStyle,
};
console.table(button1);
//                                        Конкатенация строк
const hello = "hello";
const world = "world";
const greetinng = hello + " " + world; //hello world

//                                                  Шаблонные строки
const greeting1 = `${hello} ${world}`;
console.log(greeting1);

//                                              Функциональные выражени
const myFunction = function (a, b) {
  // присвоение анонимного функционального выражения переменной
  let c;
  a = a + a;
  c = a + b;
  return c;
};
myFunction(5, 3); //9

//                              Функциональное выражение в вызове другой функции

setTimeout(function () {
  console.log("отложенное сообщение"), 1000;
}); // 'отлложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)

//                                      Стрелочные функции
//  Стрелочные функции всегда анонимны
const myFunction_ = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};
myFunction_(5, 3); //9
//                      Стрелочная функция в вызове другой функции
setTimeout(() => {
  console.log("отложенное сообщение");
}, 1000);
//  Сокращение в стрелочных функциях

// еслт один параметр, то  круглые скобки можно опустить
(a) => {
  //тело функции
};

//  Фигурные скобки можно опустить если тело функции состоит из одного выражения
(a, b) => a + b; // в этом случае функция неявно  возвращает результат выражения

//                                  Значение параметров функции по умолчанию
function multByFactor(value, multiplaier = 1) {
  return value * multiplaier;
}
multByFactor(10, 2); //20               если значение параметра не будет введено multiplaier тогда по умолчанию он будет равен единице
multByFactor(5); //5
// пример 2 с использование функционального выражения
const multByFactor1 = function (value, multiplaier = 1) {
  return value * multiplaier;
};
//  пример 3 с использованием стрелочных функций
const multByFactor2 = (value, multiplaier = 1) => {
  return value * multiplaier;
};

//         пример 4

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt, //эквивалентно addedat:addedat
}); // использование здесь () позволяет неявно вернуть объект

const firstPost = {
  id: 1,
  author: "Maksat",
};
console.log(newPost(firstPost));

const NewPost = (post, addedAt = Date()) => {
  const returnPost = { ...post, addedAt };
  return returnPost;
};
console.log(NewPost(firstPost)); // пример с использованиемстрелочной функции с явным возвратом объекта

//                                                      Обработка ошибок в js
// const fnWithError = () => {
//   throw new Error("Some error");
// };
// fnWithError(); //ВЫполнение кода остановитсяс после появления Uncaught ошибки
// console.log("Continue...");
try {
  //выполнение блока кода
} catch (error) {
  // этот блок выполняется в случае возникновения ошибок в блоке try
}
//  пример
const fnWithError = () => {
  throw new Error("Some error");
};

try {
  fnWithError(); // Если в try ошибка тогда будет выполняться catch
} catch (error) {
  console.error(error);
  console.error("salam");
  console.log(error.message);
} // выыполнение кода продолжится
console.log("continue...");

//                                       Инструкции

let a2;

const b2 = 5;

if (a2 > b2) {
  console.log("a2 is larger");
}

for (let i = 0; i++; i < 5) {
  console.log(i);
}
// Инструкция обычно заканчивается точкой с запятой
// точка с запятой не требуется после блока инструкции
// точку с запятой можно опускать

//                                          Выражение может быть инструкцией
/*
("abc");

a = a + 3;

c = a + b;

d = "Good " + "Evening";

myFunction(c, d);           это выражение называтеся инструкцией

console.log("Hey");
                                                    Инструкция не может быть трансформирована в выражение!!!
                                    Как отличить инструкцию от выражения? 
                                    - Выражения могут быть использованы как аргументы в вызовах функций
*/
function myFnn(a) {
  console.log(a);
}

const bb = true;
let cc = 10;
myFnn(2 + 3); //5
myFnn((cc = cc + 1)); //11 - это выражения
// myFnn(cc=cc+1;)  - это инструкции uncaught syntaxError
// myFn(const pi=3)

//                                                             МАССИВЫ - это объект с цифровыми именами свойств
// Формат записи массива
const myArray = [1, 2, 3];
console.log(myArray);
//1,2,3
const myArray2 = new Array(1, 2, 3);
console.log(myArray2); //1,2,3
console.log(myArray.length);
console.log(myArray === myArray2); //false массивы не равны так как их значения хранятся в разных местах памяти
const myArray3 = myArray;
console.log(myArray === myArray3); // true так как они ссылаюься на один и тот же объект

//                                                Массив vs Объект
const myObject1 = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(myObject1); //{0:1, 1:2, 2:3, length:3}

const myArrayy = [1, 2, 3];
console.log(myArrayy); //[1, 2, 3]
//                                     Чтение значений массива
const myArrayyy = [1, true, "a"];
console.log(myArrayyy); //[1,true,'a']
console.log(myArrayyy[0]); //1
console.log(myArrayyy[1]); //true
console.log(myArrayyy[2]); //'a'
console.log(myArrayyy.length); //3
//                              как добавлять элементы в массив
const myArrayy_ = [1, 2, 3, 4];
console.log(myArrayy_); //[1,2,3,4]
console.log(myArrayy_.length); //4
myArray[2] = "abc";
console.log(myArrayy_[2]); //'abc'
myArrayy_[4] = true; // добавляем новый элемент (не очень удобно так как надо знать длину массива)
console.log(myArrayy_); //[1, 2,'abc', 4, true]
console.log(myArrayy_.length); //5
//                                                       методы массивов
/*push                                             они называютcя методами протатипов
pop
shift 
unshift
forEach
map*/
// -----------------------------------------------------------------push-----------------------------------------------------------------------
console.log(
  "-------------------------------------------------------push--------------------------------------------------------------------"
);

const myArrayyyy = [1, 2, 3];
console.log(myArrayyyy); //[1,2,3]
myArrayyyy.push(4); // добавляет элемент в конец массива
console.log(myArray); //[1,2,3,4]
myArrayyyy.push(true);
console.log(myArrayyyy); //[1,2,3,4,true]
// -----------------------------------------------------------------pop-----------------------------------------------------------------------
console.log(
  "-------------------------------------------------------pop--------------------------------------------------------------------"
);

const myArrayyyy1 = [1, 2, 3];
myArrayyyy1.pop(); // удаляет последний элемент
console.log(myArrayyyy1); //[1,2]
const removedElement = myArrayyyy1.pop();
console.log(myArrayyyy1); //[1]
console.log(removedElement); //2
//---------------------------------------------------------------unshift_________________________________________________________________________________________
console.log(
  "----------------------------------------------------unshift --------------------------------------------------------------------"
);

// добавляет элемент в начало массива
const myARR = [1, 2, 3];
console.log(myARR); //[1,2,3]
myARR.unshift(true);
console.log(myARR); //[true, 1, 2, 3]   // добавляет элемент в начало массива
myARR.unshift("abc");
console.log(myARR); //['abc', true, 1, 2, 3]// добавляет элемент в начало массива
// ________________________________________________________________shift_____________________________________________________________________
console.log(
  "-------------------------------------------------------shift--------------------------------------------------------------------"
);

//  удаляет первый жлемент массива
const myArr = [1, 2, 3];
console.log(myArr); //[1,2,3]
myArr.shift();
console.log(myArr); //[2, 3]
const removedElemet1 = myArr.shift(); // возвращает удаленный элемент
console.log(myArr); //[3]
console.log(removedElemet1); //2
// _________________________________________________________________forEach_____________________________________________________________________c
console.log(
  "-------------------------------------------------------forEach--------------------------------------------------------------------"
);
// в этом методе есть аргумент который является функцией
const myArrr = [1, 2, 3, 10];
console.log(myArrr); //[1,2,3,10]
const res = myArrr.forEach((el) => console.log(el * 2));
// методд forEach применяет колбэк функцию к каждому элементу массива
// т.е выполняет функцию для каждого элемента массива
console.log(res); // forEach возвращает undefined
console.log(myArrr); //[1,2,3,10] оригинальный массив не изменится
// _________________________________________________________________map_____________________________________________________________-
console.log(
  "// _________________________________________________________________map_____________________________________________________________-"
);
// метод map создает новый массив
// методд map применяет колбэк функцию к каждому элементу массива и создает новый массив
// вызывает колбэк функцию для каждого элемента массива и возвращает новый массив
const myArr_ = [1, 2, 3];
console.log(myArr_); //[1,2,3]
const newArr = myArr_.map((el) => {
  return el * 3; //использовали явное возвращение из колбэк функции
});
// методд map применяет колбэк функцию к каждому элементу массива
// т.е выполняет функцию для каждого элемента массива
console.log(newArr); // map возвращает новый массив   [3,6,9]
console.log(myArr_); //[1,2,3] оригинальный массив не изменится
//_______________________________________________________ concat______________________________________________-
console.log(
  "______________________________________________________concat____________________________________________"
);
// Объединяет два массива в один
aaaaa = myArray.concat([1, 21, "hello"]);
console.log(aaaaa);

//                                                                             Деструктуризация
//                                                            деструктуризация объектов
console.log(
  "____________________________________________________________Деструктуризация Объектов_______________________________________________________"
);
const userProfile1 = {
  name_: "MaksatLegenda",
  commentsQty: 111111111,
  hasSignedAgreement: false,
};
const { name_, commentsQty } = userProfile1; // обьявление новых переменных и присваивание значений на основе значений свойств объекта
const { hasSignedAgreement } = userProfile1;

console.log(name_); //MaksatLegenda
console.log(commentsQty); //111111111
//                                                                    деструктуризация массивов
console.log(
  "____________________________________________________________Деструктуризация массивов________________________________________________________"
);
const fruits = ["Apple", "Banana"];
const [fruitOne, fruitTwo] = fruits; //Объявление новыых переменных и приваивание значений на основе элементов массивов
// Порядок присваивания соответствует индексу элементов массива
console.log(fruitOne); //Apple
console.log(fruitTwo);
//                                                                      Деструктуризация в функциях
console.log(
  "___________________________________________________________ Деструктуризауия в фуннкциях________________________________________"
);
const userProfile_ = {
  name1_: "Maksat",
  commentsQty_: 18,
  hasSignedAgreement_: false,
};
const userInfo = ({ name1_, commentsQty_ }) => {
  //это деструктуризация параметров функции
  if (!commentsQty_) {
    return `User ${name1_} has no comments`;
  }
  return `User ${name1_} has ${commentsQty_} comments`;
};
userInfo(userProfile_); // User Maksat has 18 comments
//                                                                        Условные инструкции
console.log(
  "___________________________________________________________________________Условные инструкции__________________________________________________________________________________"
);
// if(условие){
//блок кода,выполняемый однократно, если условие прадиво
//}
let val = 10;
if (val > 5) {
  val += 20;
}
console.log(val); //30
const person5 = {
  age: 20,
};
if (!person5.name) {
  //          !undefined = true
  console.log("имя не указано");
  //Другие действия в случае, если свойства "name"  у объекта "person5" нету
}
//                                                           Инструкция if else
val = 10;
if (val < 5) {
  val += 20;
} else {
  val -= 20;
}
console.log(val); //-10
//                                                           Инструкция if else if
const agee = 25;
if (agee >= 18) {
  console.log("Is adult");
} else if (agee >= 12) {
  console.log("Is teenager");
} else {
  console.log("Is child");
}
//  Предпочтительным является формат if Нежели if else
// Пример If
if (agee >= 18) {
  console.log("Is adult");
}
if (agee >= 12 && agee < 18) {
  console.log("Is teenager");
}
if (agee < 12) {
  console.log("Is child");
}
//                                                                        Использование if в функциях
console.log(
  "___________________________________________________________ Использование if в функциях_________________________________________________________________________"
);
const sumPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "Numbers are not positive";
  }
  return a + b;
};
//                                                                        Использование switch в функциях
console.log(
  "___________________________________________________________ Использование switch_________________________________________________________________________"
);

const month = 2;
switch (month) {
  case 12:
    console.log(" Decamber");
    break;
  case 1:
    console.log("Январь");
    break;
  case 2:
    console.log("Февраль");
    break;
}
//                                                                        Тернарный оператор
console.log(
  "___________________________________________________________Тернaрный оператор__________________________________________________________________________________"
);
const value11 = 11;
value11 ? console.log("Условие истинно") : console.log("Условие ложно");

const value1 = 11;
const value2 = 25;
value1 && value2 ? myFunction(value1, value2) : myFunction();
let value_ = 11;
console.log(value_ >= 0 ? value_ : -value_); //11

value_ = -5;
const res_ = value_ >= 0 ? value_ : -value_;
console.log(res_); //5
//                                                                        ЦИКЛЫ
console.log(
  "______________________________________________________________________ЦИКЛЫ__________________________________________________________________________________"
);
/*                                                                      Типы циклов 
                                        for                                               fot ... in ...
                                        while                                               do while    
                                                                   for of               */
// for(Начальная инструкция;Условие; Итерационное действие){ Блок кода выполняется многократно}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(
  " Циклы можно использовать для массивов , но не рекомендуется_________________________________________________________________________"
);
//                                                  Циклы можно использовать для массивов , но не рекомендуется
// Лучше использовать функции высшего порядка  forEach map  reduce
//  цикл for для массивов
const myyArray = ["first", "second", "third"];
for (let i = 0; i < myyArray.length; i++) {
  console.log(myyArray[i]);
}
// лучше сделать так:
myyArray.forEach((elemввввent, inвdex) => {
  console.log(elemввввent, inвdex);
});
// ___________________________________________________________While
console.log(
  "________________________________________________________________________while_________________________________"
);
i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// ___________________________________________________________do While____________________________________________________________________
console.log(
  "________________________________________________________________________do while_________________________________"
);
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// ______________________________________________for in
console.log(
  "____________________________________________________________for in___________________________________________"
);

const myObject1_ = {
  x: 10,
  y: true,
  z: "abc",
};
for (const key in myObject1_) {
  console.log(key, myObject1_[key]);
}
Object.keys(myObject1_).forEach((key) => {
  // keys превращает объект в массив
  console.log(key, myObject1_[key]);
});
Object.values(myObject1_).forEach((value) => {
  // values даст на выходе массив со значениями объекта
  console.log(value);
});
// ______________________________________________for of
console.log(
  "____________________________________________________________for of___________________________________________"
);
const myString = "Hey";
for (const letter of myString) {
  console.log(letter);
  //   H
  // e
  // y
}
// for of - не для объектов объект не итерируемый элемент в js
// _________________________________________________________КЛАССЫ______________________________________________________________
console.log('______________________________________________________________________class_______________________________________________________________')

//классы позволяют создавать протатипы для объектов

// на основании протатипа создаются экземпляры
// экземпляры наследуют саойства и методы протатипов

class Comment{ // Пример класса
  constructor(text) {
    this.text = text
    this.votesQty = 0
  }
  // переменная this указывает на экземпляр класса
  upvote() {
    this.votesQty += 1// upvoute наследуется всеми экземплярами классса Comment
  }
}
const firstComment = new Comment('First comment')// Создание нового экземпляра класса  Comment_______________________________Конструктор вызывается когда создаете новый экземпляр используя ключевое слово new
// ________________________________
// вызывается функция constuctor
console.log(firstComment)// text:"First comment"
// votesQty:0

// Класс наследует все методы объекта 

// Проверка пренадлежности
firstComment instanceof Comment //true
firstComment instanceof Object //true
// instanceof проверяет принадлежит ли Объект к определенномй классу 

firstComment.upvote()
console.log(firstComment.votesQty)//1
firstComment.upvote()//                                          методы можно вызывать многократно
console.log(firstComment.votesQty)//2

// Проверка принадлежности свойств экземпляру объекта
firstComment.hasOwnProperty('text')//true
firstComment.hasOwnProperty('votesQty')//true
firstComment.hasOwnProperty('upvote')//false
firstComment.hasOwnProperty('hasOwnProperty') // false

// Создание нескольких экземпляров
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Tnird comment')
console.log('________________________________________________________Статические методы____________________________________________________________')
// __________________________________________________________________Статические методы______________________________________________________________
class Comments{
  constructor(text){
    this.text = text
    this.votesQty=0
  }
  upvote(){
    this.votesQty+=1
  }
  static mergeComments(first, second){ // метод доступен как свойство класса и не наследуется экземплярами класса
    return`${first} ${second}`
//  но они доступны как методы конкретного класса
  }
}
Comments.mergeComments('First comment.', 'Second comment.')//'First comment. Second comment'.
// ________________________________________________________Расширение других классов____________________________________________________________
console.log('________________________________________________________Расширение других классов____________________________________________________________')
class NumbersArray extends Array{ // Родительский конструктор вызовется автоматически (В данном примере Array)
  sum(){
    return this.reduce((el,acc)=>acc+el,0)
  }
}
const myArrray = new NumbersArray(2, 5, 7)
console.log(myArrray)
myArrray.sum()//14

// -___________________________________________________________________________________Промисы______________________________________________________________
console.log('// -______________________________________________________________________Промисы______________________________________________________________')
// Промисы позволяют обрабатывать отложенные во времени события
// Промис - это обещание предоставить результат позже
// промис может вернуть ошибку если результат предоставить невозможно
/*
                                      Состаяния промиса
                                          Ожидание
                                          Исполнен
                                          Отклонен                          */
                                          // Создание промиса

const myPromise = new Promise((resolve, reject)=>{
  /*
  *ВЫполнение асинхронных действий
  *
  * Внутри этой функции нужно в результате вызвать
одну из функции resolve или reject*/
});
// Вновь созданный промис будет в состоянии pending

// Получение результата промиса
myPromise
.then(value=>{
  /**
* Действия в случае Промиса
*Значение value - это значение, переданное в вызове 
функции resolve внутри Промиса*/ 
})
.catch(error=>{
  /**
   * Действия в случае отклонения Промиса
   * Значение error - это значение, переданное в вызове
   функции reject внутри Промиса

   */
})

// ________________________________________________________________________ async await_____________________________________________
console.log('// ________________________________________________________________________ async await_________________________________________________________')
// async/await - специальный синтаксис для упрощения работы с промисами

async function asyncFnnn(){
  //Всегда возвращает промис
}
const asyncFn = async() =>{
  return 'Success' 
  //Всегда возвращает промиc
  // вернет промис и потом выполнет resolve этого промиса и в качестве результата этого промиса в функцию resolve будет передана строка 'success'
  // будет resolve('success')
}
asyncFn()
.then(value => console.log(value))//Success
// ПРИМЕР 2
const asyncFun = async () => {
  throw new Error('There was an error')
}
asyncFun()// вернет Результат промиса
.then(value => console.log(value))
.catch(error => console.log(error.message))//There was an error


// ________________________________________________________________________ ожидание результата await_____________________________________________
console.log('// ________________________________________________________________________ ожидание результата await_________________________________________________________')
const timerPromise = () =>
new Promise((resolve, reject) => 
setTimeout(() => resolve(), 2000))

const asyncFunction = async () => {
  console.log('Timer starts')
  const startTime = performance.now()
  await timerPromise()//Функция дальше не выполняется пока не получен результат промиса (исполнен/оотклонен). т.е функция будет ждать промис
  const endTime = performance.now()
  console.log('Timer ended', endTime - startTime)
}
asyncFunction()


// Главное в ASYNC/AWAIT
/*
1.Async/Await - это синтаксическая надстройка над промисами
2. await синтаксис возможен только внутри async функции
3. async функция всегда возвращает Promise
4. async функция ожидает результата иинструкции
await и не выполняет последуещие инструкции*/