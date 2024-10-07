const person = {
    name: "Rick",
    job: "Dev Full-Stack",
    parents: ["Dai", "Vando"]
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents)

const [father, mother, a, b, c] = parents
console.log(father, mother)


// SEM DESESTRUTURAÇÃO
// function createUser(person) {
//     const id = Math.floor(Math.random() * 9999)
//     return {
//         id,
//         name: person.name,
//         job: person.job,
//         parents: person.parents
//     }
// }
// const rick = createUser(person)
// console.log(rick)


// COM DESESTRUTURAÇÃO
function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}
const rick = createUser(person)
console.log(rick)