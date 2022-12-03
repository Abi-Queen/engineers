const inquirer = require('inquirer')
const path = require('path')
// const {writeFile} = require('./src/pageTemplate')
const fs = require('fs')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require('./src/pageTemplate')

const teamMembers = []

//main inquirer prompt for user input, start with manager
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
            //send manager input to Manager constructor and add to teamMembers array
        ]).then(answers => {
            const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.officeNumber)
            teamMembers.push(manager)
            createTeam()
        })
    }

    //prompt to select which team member to enter//
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

    //prompts for adding engineer info
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engName',
                message: 'What is the name of the engineer?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a name.'
                }
            },
            {
                type: 'input',
                name: 'engId',
                message: 'What is their id?'
            },
            {
                type: 'input',
                name: 'engEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?'
            }
            //send user input to Engineer constructor and teamMembers array
        ]).then(answers => {
            const engineer = new Engineer (answers.engName, answers.engId, answers.engEmail, answers.github)
            teamMembers.push(engineer)
            createTeam()
        })
    }

    //prompts for adding intern info
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'intName',
                message: 'What is the name of the intern?',
                validate: answer => {
                    if(answer !== '') {
                        return true;
                    }
                    return 'Please enter a name.'
                }
            },
            {
                type: 'input',
                name: 'intId',
                message: 'What is their id?'
            },
            {
                type: 'input',
                name: 'intEmail',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is their school?'
            }
            //send intern input to Intern constructor and teamMembers array
        ]).then(answers => {
            const intern = new Intern (answers.intName, answers.intId, answers.intEmail, answers.school)
            teamMembers.push(intern)
            createTeam()
        })
    }

    //send user input to html in DIR
    function buildTeam() {
        //create output directory if output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8')
    }
    createManager()
}

appMenu()

// //create file
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs. writeFile('./dist/index.html', fileContent, err => {
//             if(err) {
//                 reject(err)
//                 return
//             }
//             resolve({
//                 ok: true,
//                 message: 'Page created.'
//             })
//         })
//     })
// }

 