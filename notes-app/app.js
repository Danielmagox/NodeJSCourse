const writer = require('fs')

writer.writeFileSync('notes.txt','My name is Danichi')

/*
Challenge: Añadir un mensaje en vez de sobreescribirlo */

writer.appendFileSync('notes.txt',' I live in Tenerife ', (err) => {
    if(err) throw err;
    console.log('Appended');
});