const names = ["Rick", "Caio", "Bruna", "Miguel", "Ana", "Luiza", "Henrique"]

console.log(names)
console.log(...names)
console.log(...names[6]) // Console.log(H, e, n, r, i....)

const namesCopy = names

namesCopy.pop()
namesCopy.pop()
namesCopy.push('Ana')

console.log({ names, namesCopy })

const namesClone = [...names]
namesClone.push('Juliano')
console.log({ names, namesCopy, namesClone })

const namesObj = { ...names }
const namesObjClone = { ...namesObj }

namesObjClone.teste = "Test"

console.log({ namesObj, namesObjClone })