import { Injectable } from '@angular/core';
import { JobExperience, Skills, Education, Project } from '../model/index';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getExperience(){
    const experience:JobExperience[]=[
      {
        companyName: 'Morgan Stanley',
        role: 'Associate Software Engineer (2020 - date)',
        briefDetails: 'Morgan Stanley mobilizes capital to help governments, corporations, institutions and individuals around the world achieve their financial goals. Worknig as java developer for Margin team',
        functionalities: {
          function1: 'Software Development',
          function2: 'Application Development',
          function3:''

        },
        technologies: {
          tech1: 'Agile',
          tech2: 'Angular-cli',
          tech3: 'jenkins',
          tech4: 'Treadmill',
          tech5: 'Git',
          tech6: 'Spring',
          tech7: 'TypeScript',
          tech8: 'Angular'
        }
      },
      {
        companyName: 'Turntabl GH',
        role: ' Software Engineer(III) (2020 - date)',
        briefDetails: 'Morgan Stanley mobilizes capital to help governments, corporations, institutions and individuals around the world achieve their financial goals. Worknig as java developer for Margin team',
        functionalities: {
          function1: 'Software Development',
          function2: 'Application Development',
          function3:''

        },
        technologies: {
          tech1: 'Agile',
          tech2: 'Angular-cli',
          tech3: 'jenkins',
          tech4: 'Treadmill',
          tech5: 'Git',
          tech6: 'Spring',
          tech7: 'TypeScript',
          tech8: 'Angular'
        }
      },



    ];
    return experience;
  }

  getSkills(){
    const skills:Skills[] = [
      {
        skillName: 'Python',
        width: '85%'
      },
      {
        skillName: 'Flask',
        width: '90%'
      }
    ,
    {
      skillName: 'FastAPI',
      width: '90%'
    },
    {
      skillName: 'Celery',
      width: '85%'
    },
    {
      skillName: 'SQLAchelmy',
      width: '70%'
    },
    {
      skillName: 'sendGrid',
      width: '80%'
    },
    {
      skillName: 'AWS',
      width: '60%'
    },
    {
      skillName: 'Postgres',
      width: '75%'
    },
    {
      skillName: 'Git',
      width: '75%'
    },
    {
      skillName: 'Jenkins',
      width: '75%'
    },
    {
      skillName: 'TypeScript',
      width: '88%'
    },
    {
      skillName: 'JavaScript',
      width: '80%'
    },
    {
      skillName: 'Angualar',
      width: '85%'
    },
    {
      skillName: 'NgRx',
      width: '85%'
    },
    {
      skillName: 'HTML, CSS, Bootstrap',
      width: '70%'
    },
    {
      skillName: 'CLI',
      width: '60%'
    },

    ]
    return skills;
  }

  getEducation() {
    const educations: Education[]=[
    {
      yearRange: '2016 - 2020',
      certificate: 'Bachelors Degree',
      gradePoint: 'GPA of 3.10',
      program: 'BSC. Computer Science',
      school: 'University of Cape Coast'
    },
    {
      yearRange: '2019 - 2019',
      certificate: 'Certificate of Completion',
      gradePoint: 'completed project',
      program: 'Software Engineering',
      school: 'Global Code Summer Camping'
    },
    {
      yearRange: '2007 - 2011',
      certificate: 'WASSCE',
      gradePoint: 'completed with 85% aggregate',
      program: 'Technical Engineering',
      school: 'Chemu Senior High School'
    }
    ]
    return educations;
  }

    getProjects() {
      const projects: Project[] = [
        {
          projectName: 'IoT Egg Incubator',
          link: 'https://github.com/larteyjoshua/IoT-Automatic-Egg-Incubator-App',
          briefDetails:'The IoT Automatic Egg Incubator is similar to the type of incubator which can be used as a substitute of poultry chicken to incubate the chicken eggs automatically. ',
          functionalities: {
            function1: 'Hatch poultry eggs without the presence of a fowl',
            function2: 'Collect data for Data Science purposes.',
            function3: 'Has a mobile App for monitoring the parameter in the system'
          },
          technologies: {
            tech1: 'C++',
            tech2: 'Anduino',
            tech3: 'MQTT',
            tech4: 'Dart',
            tech5: 'Flutter',
            tech6: 'Local storage',
            tech7: 'ESP- 32',
            tech8: 'IOT'

          }
        },
        {
          projectName: 'IoT Smart Height Detector',
          link: 'https://github.com/larteyjoshua/Smart-Height-Detector-2',
          briefDetails:'This project is an IoT device that allow you to check you height and get a copy of the readings sent to you as a text message. ',
          functionalities: {
            function1: 'Check your height',
            function2: 'Send height details as Text Message',
            function3: 'Keep Records of Height which can be exported for reasearch purpose'
          },
          technologies: {
            tech1: 'C++',
            tech2: 'Anduino',
            tech3: 'Http',
            tech4: 'python',
            tech5: 'Flask',
            tech6: 'postgress',
            tech7: 'ESP- 32',
            tech8: 'IOT'

          }
        },
        {
          projectName: 'IoT Water Metering System',
          link: 'https://github.com/larteyjoshua/IoT-Water-Metering-System',
          briefDetails:'This is a water metering sytem that get water usage reading through sensors and generate bills for users',
          functionalities: {
            function1: 'Collect water usage readings',
            function2: 'User login and management',
            function3: 'Generate water bills and send to the user using automatically'
          },
          technologies: {
            tech1: 'C++',
            tech2: 'Anduino',
            tech3: 'Http',
            tech4: 'python',
            tech5: 'FastAPI',
            tech6: 'postgress',
            tech7: 'Celery',
            tech8: 'Microserivces'

          }
        },
          {
            projectName: 'LunchAPP',
            link: 'https://github.com/larteyjoshua/LaunchApp',
            briefDetails:'This project seek to address Issues where company employees havent been provided with a standard system to choose their favourite lunch of their choice. ',
            functionalities: {
              function1: 'User registration',
              function2: 'book launch',
              function3: 'management of users and bookings'
            },
            technologies: {
              tech1: 'python',
              tech2: 'SQLAchelmy',
              tech3: 'FastAPI',
              tech4: 'openAPI',
              tech5: 's3 bucket',
              tech6: 'sendgrid',
              tech7: 'https',
              tech8: 'OOP'

            },
          },
          {
            projectName: 'Convexityt Monitor',
            link: '',
            briefDetails:'This project seek to show or display risk of positions and risk base on client parameters ',
            functionalities: {
              function1: 'View positions',
              function2: 'View Loans',
              function3: 'Display Risk metrices'
            },
            technologies: {
              tech1: 'TypeScripts',
              tech2: 'Angular',
              tech3: 'NgRx',
              tech4: 'jenkins',
              tech5: 'git',
              tech6: 'treadmill',
              tech7: 'https',
              tech8: 'OOP'

            },
          },
          {
            projectName: 'Personal Portfolio',
            link: '',
            briefDetails:'This display my Personal Portfolio using Angular standard coding Practices.',
            functionalities: {
              function1: 'Get to know me',
              function2: 'Get more infor about me',
              function3: 'Display my skills'
            },
            technologies: {
              tech1: 'TypeScripts',
              tech2: 'Angular',
              tech3: 'HTML/CSS',
              tech4: 'Bootstrpa',
              tech5: 'git',
              tech6: 'JavaScripts',
              tech7: 'https',
              tech8: 'OOP'

            },
          }
      ]
      return projects;
    }
}
