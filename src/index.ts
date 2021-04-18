import { add } from './add'
import { divide } from './divide'

var resultAdd = document.createElement('p')
resultAdd.textContent = `Add result 1+6=${add(1, 6)}`
document.body.appendChild(resultAdd)

var resultDivide = document.createElement('p')
resultDivide.textContent = `Divide result 8/4=${divide(8, 4)}`
document.body.appendChild(resultDivide)
