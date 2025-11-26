
export type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

export interface MeetingTime {
  day: Weekday;
  startMinutes: number; 
  endMinutes: number;
}

export interface Section {
  id: string;          
  courseCode: string;  
  title: string;
  instructor?: string;
  meetings: MeetingTime[];
}

export interface Course {
  code: string;        
  name: string;
  credits: number;
  prerequisites: string[];  
  sections: Section[];
}

export interface Program {
  id: string;
  name: string;
  description?: string;
  requiredCourseCodes: string[];
}
