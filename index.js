let text =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
console.log(text.length)
let textHalfIndex = text.length / 2
console.log(textHalfIndex)
textHalfIndex = Math.floor(textHalfIndex)
let textHalf = text.slice(0, textHalfIndex)
console.log(textHalf)
let textHalfA = textHalf.replaceAll('а', 'А')
console.log(textHalfA)
let textHalfFinish = textHalfA.replaceAll(/\s/g, '')
console.log(textHalfFinish)
let textHalfFinishDouble = textHalfFinish.repeat(3)
console.log(textHalfFinishDouble)
