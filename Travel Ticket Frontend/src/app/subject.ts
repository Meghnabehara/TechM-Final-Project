export class Subject {
    id?: number; // Optional field since it's generated by the backend
    subjectCode: string;
    subjectName: string;
    date: string; // Using string to match the HTML input type="date"
    startTime: string; // Using string to match the HTML input type="time"
    endTime: string; // Using string to match the HTML input type="time"
    year: string;
    semester: string;
    department: string;
    
    // Include other necessary fields if required
    constructor() {
      this.subjectCode = '';
      this.subjectName = '';
      this.date = '';
      this.startTime = '';
      this.endTime = '';
      this.year = '';
      this.semester = '';
      this.department = '';
    }
  }
  