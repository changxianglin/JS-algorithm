export default (str) => {
  let arr = str.split(' ')
  let result = arr.map((item) => {
    return item.split('').reverse().join('')
  })
  return result.join(' ')
}
