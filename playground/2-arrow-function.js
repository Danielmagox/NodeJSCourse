/* const square = function (x) {
    return x * x;
} */

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x 

// console.log(square(3));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList(){     //Las funciones si tienen acceso porque están al mismo ámbito que fueron creadas
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {   //Las arrows function no están ligadas
        console.log(guest + 'is attending ' + this.name) 
        })
    }
}

event.printGuestList()