// 常规思路
// export default (str) => {
//   let arr = str.split(' ')
//   let result = arr.map((item) => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// 正则
// export default (str) => {
//   let arr = str.split(/\s/g)
//   let result = arr.map((item) => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// 完全正则
export default (str) => {
  return str.match(/[\w']+/g).map((item) => {
    return item.split('').reverse().join('')
  }).join(' ')
}
