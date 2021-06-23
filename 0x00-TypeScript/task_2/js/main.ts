export interface DirectorsInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workDirectorTasks(): string;
}

export interface TeacherInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workTeacherTasks(): string;
}

export class Director implements DirectorsInterface {
	    workFromHome() { return 'Working from home'; }
	    getCoffeeBreak() { return 'Getting a coffee break'; }
	    workDirectorTasks() { return 'Getting to director tasks'; }
}

export class Teacher implements TeacherInterface {
	    workFromHome() { return 'Cannot work from home'; }
	    getCoffeeBreak() { return 'Cannot have a break'; }
	    workTeacherTasks() { return 'Getting to work'; }
}

export function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) return new Teacher();
	return new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
    return (employee instanceof Director) ? true : false;
}

export function executeWork(employee: Director | Teacher): string {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects): string {
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
