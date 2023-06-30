// const sum=(a,b)=>a+b
// export default sum
// такой способ используется при экспорте одной переменной
// const one=1
// const two='two'

// export{one,two}
// // не путать с объектом!

const sum = (a, b)=> a + b
const mult = (a, b) => a * b
export{
    sum,
    mult
}