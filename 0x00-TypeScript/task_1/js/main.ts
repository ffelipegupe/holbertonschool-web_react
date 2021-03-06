// Create a Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
  }
  
  // Directors interface
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Teacher and Director
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
    
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`;
}
  
// class description interface
export interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
// constructor description interface
export interface classConstructor {
    new (firstName: string, lastName: string): classInterface;
  }
  
// Creating Student class
export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() { return 'Currently working'; }
	displayName() { return this.firstName; }
}

export interface StudentClassInterface {
	readonly firstName: string;
	readonly lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

export interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}
