fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch возвращает промис
    .then(response=>{
        console.log(response)
        return response.json()   // метод json также возвращает промис поэтому на следюсьроке мы также пишем then
    })/*В JavaScript, метод .json() используется для извлечения 
    данных из объекта Response, полученного в результате выполнения HTTP-запроса с использованием Fetch API. 
    Этот метод преобразует данные, полученные от сервера в формате JSON, в объект JavaScript.*/ 
    .then(json => console.log(json))
    .catch(error => console.error(error))




const getData = (url)=>
    new Promise((resolve, reject) =>
    fetch(url)
    .then(response => response.json())
    .then(json=> resolve(json))
    .catch(error=>reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos') 
    .then(data => console.log(data))
    .catch(error = console.log(error.message))

//  Переход с промисов  на ASYNC/AWAIT
// ПРИМЕР 4
const getDATa = async (url) => {

    const res = await fetch(url)
    const json = await res.json()// .json() преобразует данные, полученные от сервера в формате JSON, в объект JavaScript
    return json
}// при ошибке ПРомис который возвращает эта функция будет автоматически отклонен с указанной ошибкой

const url = 'https://jsonplaceholder.typicode.com/todos'
try{
const data = await getDATa(url)//нет обработки ошибок 
console.log(data)
}catch(error){
    console.log(error.message)//естьобработка ошибок
}
// Главное в ASYNC/AWAIT
/*
1.Async/Await - это синтаксическая надстройка над промисами
2. await синтаксис возможен только внутри async функции
3. async функция всегда возвращает Promise
4. async функция ожидает результата иинструкции
await и не выполняет последуещие инструкции*/