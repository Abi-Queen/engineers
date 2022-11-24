const Employee = require("../lib/Employee");

const generateTeam = team => {
    const cards = team.map((employee)=>{
        switch (employee.getRole()) {
            case 'Engineer':
                return generateEngineer(employee)
            case 'Intern':
                return generateIntern(employee)
            case 'Manager':
                return generateManager(employee)
            default:
                break;
        }
    })
    console.log(cards)
    return cards.join('')
}

    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">
                <i class="fa-thin fa-gears"></i>
                ${engineer.getRole()}
                </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Office number: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
        `
    }
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">
                <i class="fa-thin fa-graduation-cap"></i>
                    ${intern.getRole()}
                </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }

    const generateManager = manager => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">
                <i class="fa-thin fa-arrows-to-circle"></i>
                    ${manager.getRole()}
                </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
    }

//export html from functions to generate entire page in dist
module.exports = team => {
    return `
    <!DOCTYPE html>  
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
    rel="stylesheet"
    href="<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css"/>
    <title>Engineering Team</title>
  </head>

  <body>
  <div class ="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">
            <i class="fa-thin fa-handshake"></i>
            Engineering Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
            </div>
        </div>
    </div>
  </body>
  </html>
    `
}
