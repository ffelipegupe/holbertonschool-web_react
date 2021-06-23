/** Creates an interface for a student */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentA: Student = {
    firstName: 'Felipe',
    lastName: 'Penagos',
    age: 25,
    location: 'Berlin',
  }
  
  const studentB: Student = {
    firstName: 'Fabio',
    lastName: 'Gutierrez',
    age: 27,
    location: 'Bogota',
  }
  
  const studentList = [studentA, studentB];
  
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  studentList.forEach((obj) => {
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellLocation = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);