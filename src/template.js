const fs = require('fs');

function employeeCard(passedObject) { 
    let param
    ({name, id, email, officeNumber, github, school} = passedObject)

    if (officeNumber) {
        param = `Office Number: ${officeNumber}`
    } else if(github) {
        param = `GitHub: <a href="https://github.com/${github}"> ${github}</a>`
    } else {
        param = `School: ${school}`
    }

    return `
    <div class="card">
                <div class="card-head">
                    <div class="card-name">${name}</div>
                    <div class="card-title">${passedObject.constructor.name}</div>
                </div>
                <div class="card-body">
                    <div class="id">ID: ${id}</div>
                    <div class="email">Email: <a href="mailto:${email}">${email}</a></div>
                    <div class="param">${param}</div>
                </div>
            </div>
    `
}
function howMany(passedObjectArray) {

    let ret = '' 
    console.log(passedObjectArray)
    for (i = 0; i < passedObjectArray.length; i++) {
        console.log(`${i}`)
        console.log(passedObjectArray[i])
        console.log(passedObjectArray[i].constructor.name)
        ret += employeeCard(passedObjectArray[i])
    }
    return ret;
}

module.exports = function (passedObjectArray) {

    let page = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    
        <header>
            My Team
        </header>
    
        <main>
            
            ${howMany(passedObjectArray)}
    
        </main>
    
    </body>
    
    </html>
    ` 

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team.html', page, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    ok: true,
                    message: 'File created!'
                });
            }
        });
    }).catch((err) => {
        console.log(err);
    });
}