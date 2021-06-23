interface DirectorsInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string; 
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  export class Director implements DirectorsInterface {
    workFromHome(): string {
      return 'Working from home';
    }
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
}
  
export function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
    if (salary as number && salary < 500) return new Teacher();
    else return new Director(); 
}
  
export function isDirector(employee: Director | Teacher): employee is Director {
    return (employee instanceof Director) ? true : false;
}
  
export function executeWork(employee: Director | Teacher): string {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}
  
type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects): string{
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
