console.log('Starting')


setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
    console.log('0 Second Timer')
}, 0)


console.log('Stopping')
//Hay un video que lo explica bien pero es sencillo, el main se ejecuta antes que el resto 