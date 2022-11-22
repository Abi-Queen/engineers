const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require('./src/page-template.js')

const teamMembers = []

function appMenu() {
    function createManager() {
        console.log('Please build your team')
        inquirer.prompt([
            {
                type: 'input',
                name: 'mgrName',
                message: 'What is the name of the team manager?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a name.'
                }
            },
            {
                type: 'input',
                name: 'mgrId',
                message: 'What is their id?'
            },
            {
                type: 'input',
                name: 'mgrEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?'
            }
        ]).then(answers => {
            const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.officeNumber)
            teamMembers.push(manager)
            createTeam()
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Which type of team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'None'
                ]
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case 'Engineer':
                    addEngineer()
                    break
                case 'Intern':
                    addIntern()
                    break
                default:
                    buildTeam()
            }
        })
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',

            }
        ]).then()
    }

    function addIntern() {
        inquirer.prompt([

        ]).then()
    }

    function buildTeam() {

    }
}