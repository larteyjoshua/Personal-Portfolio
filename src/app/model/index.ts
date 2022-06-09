export interface Functionality{
function1: string;
function2: string;
function3: string;
}

export interface Technology {
tech1: string;
tech2: string;
tech3: string;
tech4: string;
tech5: string;
tech6: string;
tech7: string;
tech8: string

}
export interface JobExperience {
  companyName: string;
  role: string;
  briefDetails: string;
  functionalities: Functionality;
  technologies: Technology;
}

export interface Skills {
  skillName: string;
  width: string;
}
export interface Education {
  yearRange: string;
  certificate: string;
  gradePoint: string;
  program: string;
  school: string;

}

export interface Project {
  projectName: string;
  link: string;
  briefDetails: string;
  functionalities: Functionality;
  technologies: Technology;
}

export interface SendEmail {
  name: string;
  subject: string;
  email: string;
  message: string;
}
