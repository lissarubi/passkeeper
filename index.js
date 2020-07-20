const readlineSync = require('readline-sync')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))


if (argv.c || argv.create){
    const servicesString = readlineSync.question('What is the services what you want to save? (separe with comma): ')
    let services = servicesString.split(',')
    
    services = services.map(function (el) {
        return el.trim();
    });
    
    const passwords = []
    
    for (i = 0; i < services.length; i++){
        passwords.push(readlineSync.question(`Password of ${services[i]}: `))
    }
    
    const servicesAndPasswords = {
        services: services,
        passwords: passwords
    }
    
    fs.writeFile(`${process.env['HOME']}/.passkeeper`, JSON.stringify(servicesAndPasswords), function (err) {
        if (err) return console.log(err);
    });
}

if (argv.s || argv.show){
    if (argv.s){
        const service = argv.s
    }

    if (argv.show){
        const service = argv.show
    }

    
}