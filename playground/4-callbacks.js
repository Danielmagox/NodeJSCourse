// setTimeout(() => {
//     console.log('2 seconds are up')
// },2000)

// const names = ['Andrew','Jen','Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (adress,callback) => {      //Se tiene que usar un callback cuando se usa programación asíncrona si o si, los return dan problemas
//     setTimeout(() => {                       //simula el delay al por ejemplom conectar a una pagina web
//         let data = {
//             latitute: 0,
//             longitude: 0
//         }
//         callback(data)
//     },2000)
// }

// geocode('Tegueste',(data) => {
//     console.log(data)
// })


const add = (num1,num2,callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    },2000)
}

add(1,4,(sum) => {
    console.log(sum) //should print 5
})




