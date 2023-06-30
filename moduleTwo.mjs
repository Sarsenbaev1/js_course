// import sumNumbers from './moduleOne.mjs'

// const res=sumNumbers(10,2)

// console.log(res)

// второй способ для экспорта нескольких переменных

// import {one as oneRenamed,
//     two
// } from './moduleOne.mjs'
// console.log(oneRenamed)//1
// console.log(two)//'two'

import{ sum, mult as multNumbers } from './moduleOne.mjs'
console.log(sum(10,2))
console.log(multNumbers(10,2))
