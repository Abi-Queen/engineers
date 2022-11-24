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
                <i class="fas fa-regular fa-gears"></i>
                ${engineer.getRole()}
                </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:someone@example.com"> ${engineer.getEmail()}</a>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
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
                ${intern.getRole()}
                </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:someone@example.com"> ${intern.getEmail()}</a>
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
                <i class="fas fa-light fa-arrows-to-circle"></i>
                    ${manager.getRole()}
                </h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:someone@example.com"> ${manager.getEmail()}</a>
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
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css"/>
    <title>Engineering Team</title>
  </head>

  <body>
  <div class ="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">
            <i class="fas fa-light fa-handshake"></i>
            Engineering Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-around">
            ${generateTeam(team)}
            </div>
        </div>
    </div>
  </body>
  </html>
    `
}
