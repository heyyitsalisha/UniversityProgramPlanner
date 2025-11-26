//mock data for courses

import { Course } from "../types";

export const COURSES: Course[] = [
  {
    code: "COMP120",
    name: "Computing for the Sciences",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "COMP120-001",
        courseCode: "COMP120",
        title: "Computing for the Sciences",
        meetings: [
          { day: "Mon", startMinutes: 600, endMinutes: 660 }, // 10:00–11:00
          { day: "Wed", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "COMP125",
    name: "Principles of Computing",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "COMP125-001",
        courseCode: "COMP125",
        title: "Principles of Computing",
        meetings: [
          { day: "Tue", startMinutes: 540, endMinutes: 600 }, // 9:00–10:00
          { day: "Thu", startMinutes: 540, endMinutes: 600 },
        ],
      },
    ],
  },
  {
    code: "COMP150",
    name: "Introduction to Programming",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "COMP150-001",
        courseCode: "COMP150",
        title: "Intro to Programming",
        meetings: [
          { day: "Mon", startMinutes: 540, endMinutes: 600 }, 
          { day: "Wed", startMinutes: 540, endMinutes: 600 },
        ],
      },
      {
        id: "COMP150-002",
        courseCode: "COMP150",
        title: "Intro to Programming",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 660 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "COMP152",
    name: "Introduction to Structured Programming",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "COMP152-001",
        courseCode: "COMP152",
        title: "Structured Programming",
        meetings: [
          { day: "Mon", startMinutes: 660, endMinutes: 720 }, 
          { day: "Wed", startMinutes: 660, endMinutes: 720 },
        ],
      },
    ],
  },
  {
    code: "COMP155",
    name: "Object-oriented Programming",
    credits: 4,
    prerequisites: ["COMP150"],
    sections: [
      {
        id: "COMP155-001",
        courseCode: "COMP155",
        title: "OOP",
        meetings: [
          { day: "Tue", startMinutes: 660, endMinutes: 720 }, 
          { day: "Thu", startMinutes: 660, endMinutes: 720 },
        ],
      },
    ],
  },
  {
    code: "COMP230",
    name: "Databases and DBMS",
    credits: 3,
    prerequisites: ["COMP155"],
    sections: [
      {
        id: "COMP230-001",
        courseCode: "COMP230",
        title: "Databases",
        meetings: [
          { day: "Mon", startMinutes: 780, endMinutes: 840 }, 
          { day: "Wed", startMinutes: 780, endMinutes: 840 },
        ],
      },
    ],
  },
  {
    code: "COMP251",
    name: "Data Structures and Algorithms",
    credits: 4,
    prerequisites: ["COMP125", "COMP155"],
    sections: [
      {
        id: "COMP251-001",
        courseCode: "COMP251",
        title: "Data Structures and Algorithms",
        meetings: [
          { day: "Fri", startMinutes: 540, endMinutes: 600 }, 
          { day: "Fri", startMinutes: 600, endMinutes: 660 }, 
        ],
      },
    ],
  },
  {
    code: "COMP256",
    name: "Introduction to Machine Architecture",
    credits: 3,
    prerequisites: ["COMP125", "COMP150"],
    sections: [
      {
        id: "COMP256-001",
        courseCode: "COMP256",
        title: "Machine Architecture",
        meetings: [
          { day: "Tue", startMinutes: 780, endMinutes: 840 }, 
          { day: "Thu", startMinutes: 780, endMinutes: 840 },
        ],
      },
    ],
  },
  {
    code: "COMP325",
    name: "Malicious Software and Attack Prevention",
    credits: 3,
    prerequisites: ["COMP155"],
    sections: [
      {
        id: "COMP325-001",
        courseCode: "COMP325",
        title: "Malware & Attack Prevention",
        meetings: [
          { day: "Mon", startMinutes: 840, endMinutes: 900 }, 
          { day: "Wed", startMinutes: 840, endMinutes: 900 },
        ],
      },
    ],
  },
  {
    code: "COMP331",
    name: "Data Quality",
    credits: 3,
    prerequisites: ["COMP230"],
    sections: [
      {
        id: "COMP331-001",
        courseCode: "COMP331",
        title: "Data Quality",
        meetings: [
          { day: "Tue", startMinutes: 840, endMinutes: 900 }, 
          { day: "Thu", startMinutes: 840, endMinutes: 900 },
        ],
      },
    ],
  },
  {
    code: "COMP340",
    name: "Operating Systems",
    credits: 3,
    prerequisites: ["COMP251"],
    sections: [
      {
        id: "COMP340-001",
        courseCode: "COMP340",
        title: "Operating Systems",
        meetings: [
          { day: "Mon", startMinutes: 720, endMinutes: 780 }, 
          { day: "Wed", startMinutes: 720, endMinutes: 780 },
        ],
      },
    ],
  },
  {
    code: "COMP350",
    name: "User Interface Design and Programming",
    credits: 3,
    prerequisites: ["COMP251"],
    sections: [
      {
        id: "COMP350-001",
        courseCode: "COMP350",
        title: "UI Design and Programming",
        meetings: [
          { day: "Tue", startMinutes: 720, endMinutes: 780 }, 
          { day: "Thu", startMinutes: 720, endMinutes: 780 },
        ],
      },
    ],
  },
  {
    code: "COMP351",
    name: "Advanced Website Programming",
    credits: 3,
    prerequisites: ["COMP251"],
    sections: [
      {
        id: "COMP351-001",
        courseCode: "COMP351",
        title: "Advanced Web Programming",
        meetings: [
          { day: "Fri", startMinutes: 780, endMinutes: 840 }, 
        ],
      },
    ],
  },
  {
    code: "COMP359",
    name: "Design and Analysis of Algorithms",
    credits: 3,
    prerequisites: ["COMP251"],
    sections: [
      {
        id: "COMP359-001",
        courseCode: "COMP359",
        title: "Design and Analysis of Algorithms",
        meetings: [
          { day: "Wed", startMinutes: 900, endMinutes: 960 }, 
        ],
      },
    ],
  },
  {
    code: "COMP360",
    name: "Computer Graphics",
    credits: 3,
    prerequisites: ["COMP251"],
    sections: [
      {
        id: "COMP360-001",
        courseCode: "COMP360",
        title: "Computer Graphics",
        meetings: [
          { day: "Thu", startMinutes: 900, endMinutes: 960 }, 
        ],
      },
    ],
  },
    // ---------- MATH ----------
  {
    code: "MATH110",
    name: "Pre-Calculus Math",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "MATH110-001",
        courseCode: "MATH110",
        title: "Pre-Calculus Math",
        meetings: [
          { day: "Mon", startMinutes: 510, endMinutes: 590 }, 
          { day: "Wed", startMinutes: 510, endMinutes: 590 },
        ],
      },
    ],
  },
  {
    code: "MATH111",
    name: "Calculus I",
    credits: 4,
    prerequisites: ["MATH110"], 
    sections: [
      {
        id: "MATH111-001",
        courseCode: "MATH111",
        title: "Calculus I",
        meetings: [
          { day: "Tue", startMinutes: 510, endMinutes: 590 }, 
          { day: "Thu", startMinutes: 510, endMinutes: 590 },
        ],
      },
    ],
  },
  {
    code: "MATH112",
    name: "Calculus II",
    credits: 4,
    prerequisites: ["MATH111"],
    sections: [
      {
        id: "MATH112-001",
        courseCode: "MATH112",
        title: "Calculus II",
        meetings: [
          { day: "Mon", startMinutes: 840, endMinutes: 920 }, 
          { day: "Wed", startMinutes: 840, endMinutes: 920 },
        ],
      },
    ],
  },
  {
    code: "MATH118",
    name: "Calculus II for Life Sciences",
    credits: 4,
    prerequisites: ["MATH111"],
    sections: [
      {
        id: "MATH118-001",
        courseCode: "MATH118",
        title: "Calculus II for Life Sciences",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 680 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 680 },
        ],
      },
    ],
  },
  {
    code: "MATH125",
    name: "Introduction to Discrete Mathematics",
    credits: 4,
    prerequisites: ["MATH110"], 
    sections: [
      {
        id: "MATH125-001",
        courseCode: "MATH125",
        title: "Introduction to Discrete Mathematics",
        meetings: [
          { day: "Mon", startMinutes: 930, endMinutes: 1010 }, 
          { day: "Wed", startMinutes: 930, endMinutes: 1010 },
        ],
      },
    ],
  },
  {
    code: "ENGL104",
    name: "Introduction to Creative Writing",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "ENGL104-001",
        courseCode: "ENGL104",
        title: "Introduction to Creative Writing",
        meetings: [
          { day: "Mon", startMinutes: 540, endMinutes: 620 }, 
          { day: "Wed", startMinutes: 540, endMinutes: 620 },
        ],
      },
    ],
  },
  {
    code: "ENGL105",
    name: "Academic Writing",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "ENGL105-001",
        courseCode: "ENGL105",
        title: "Academic Writing",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 660 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "ENGL108",
    name: "Introduction to Literature: Words and Worlds",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "ENGL108-001",
        courseCode: "ENGL108",
        title: "Introduction to Literature: Words and Worlds",
        meetings: [
          { day: "Mon", startMinutes: 630, endMinutes: 710 }, 
          { day: "Wed", startMinutes: 630, endMinutes: 710 },
        ],
      },
    ],
  },
  {
    code: "ENGL170",
    name: "Topics in Literature",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "ENGL170-001",
        courseCode: "ENGL170",
        title: "Topics in Literature",
        meetings: [
          { day: "Tue", startMinutes: 720, endMinutes: 770 }, 
          { day: "Thu", startMinutes: 720, endMinutes: 770 },
        ],
      },
    ],
  },
  {
    code: "ENGL200",
    name: "Introduction to Literary Critical Methods",
    credits: 3,
    prerequisites: ["ENGL105", "ENGL108"],
    sections: [
      {
        id: "ENGL200-001",
        courseCode: "ENGL200",
        title: "Introduction to Literary Critical Methods",
        meetings: [
          { day: "Mon", startMinutes: 780, endMinutes: 860 }, 
          { day: "Wed", startMinutes: 780, endMinutes: 860 },
        ],
      },
    ],
  },
  {
    code: "ENGL203",
    name: "Literature and Film",
    credits: 3,
    prerequisites: ["ENGL105", "ENGL108"],
    sections: [
      {
        id: "ENGL203-001",
        courseCode: "ENGL203",
        title: "Literature and Film",
        meetings: [
          { day: "Tue", startMinutes: 870, endMinutes: 950 }, 
          { day: "Thu", startMinutes: 870, endMinutes: 950 },
        ],
      },
    ],
  },
  {
    code: "ENGL208",
    name: "Creative Writing: Screenwriting",
    credits: 3,
    prerequisites: ["ENGL104"],
    sections: [
      {
        id: "ENGL208-001",
        courseCode: "ENGL208",
        title: "Creative Writing: Screenwriting",
        meetings: [
          { day: "Mon", startMinutes: 960, endMinutes: 1020 }, 
          { day: "Wed", startMinutes: 960, endMinutes: 1020 },
        ],
      },
    ],
  },
  {
    code: "ENGL209",
    name: "The Structure of the English Language",
    credits: 3,
    prerequisites: ["ENGL105"],
    sections: [
      {
        id: "ENGL209-001",
        courseCode: "ENGL209",
        title: "The Structure of the English Language",
        meetings: [
          { day: "Tue", startMinutes: 1020, endMinutes: 1100 }, 
          { day: "Thu", startMinutes: 1020, endMinutes: 1100 },
        ],
      },
    ],
  },
  {
    code: "HIST101",
    name: "Introduction to World History",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "HIST101-001",
        courseCode: "HIST101",
        title: "Introduction to World History",
        meetings: [
          { day: "Mon", startMinutes: 540, endMinutes: 620 }, 
          { day: "Wed", startMinutes: 540, endMinutes: 620 },
        ],
      },
    ],
  },
  {
    code: "HIST102",
    name: "Canada: 1867 to the Present",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "HIST102-001",
        courseCode: "HIST102",
        title: "Canada: 1867 to the Present",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 660 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "HIST103",
    name: "Stó:lō History",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "HIST103-001",
        courseCode: "HIST103",
        title: "Stó:lō History",
        meetings: [
          { day: "Mon", startMinutes: 630, endMinutes: 710 }, 
          { day: "Wed", startMinutes: 630, endMinutes: 710 },
        ],
      },
    ],
  },
  {
    code: "HIST115",
    name: "Traditional East Asian Civilizations",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "HIST115-001",
        courseCode: "HIST115",
        title: "Traditional East Asian Civilizations",
        meetings: [
          { day: "Tue", startMinutes: 720, endMinutes: 770 }, 
          { day: "Thu", startMinutes: 720, endMinutes: 770 },
        ],
      },
    ],
  },
  {
    code: "HIST161",
    name: "Aztecs, Mayas, and Spaniards",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "HIST161-001",
        courseCode: "HIST161",
        title: "Aztecs, Mayas, and Spaniards",
        meetings: [
          { day: "Mon", startMinutes: 780, endMinutes: 860 }, 
          { day: "Wed", startMinutes: 780, endMinutes: 860 },
        ],
      },
    ],
  },
  {
    code: "HIST162",
    name: "¡Revolución! Politics, Protest, and Culture in Modern Latin American History",
    credits: 3,
    prerequisites: [],
    sections: [
      {
        id: "HIST162-001",
        courseCode: "HIST162",
        title: "Modern Latin American History",
        meetings: [
          { day: "Tue", startMinutes: 870, endMinutes: 950 }, 
          { day: "Thu", startMinutes: 870, endMinutes: 950 },
        ],
      },
    ],
  },
  {
    code: "BIO105",
    name: "Human Biology",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "BIO105-001",
        courseCode: "BIO105",
        title: "Human Biology",
        meetings: [
          { day: "Mon", startMinutes: 540, endMinutes: 620 }, 
          { day: "Wed", startMinutes: 540, endMinutes: 620 },
        ],
      },
    ],
  },
  {
    code: "BIO106",
    name: "Ecology from an Urban Perspective",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "BIO106-001",
        courseCode: "BIO106",
        title: "Ecology from an Urban Perspective",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 660 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "BIO111",
    name: "Introductory Biology I",
    credits: 5,
    prerequisites: [],
    sections: [
      {
        id: "BIO111-001",
        courseCode: "BIO111",
        title: "Introductory Biology I",
        meetings: [
          { day: "Mon", startMinutes: 630, endMinutes: 710 }, 
          { day: "Wed", startMinutes: 630, endMinutes: 710 },
          { day: "Fri", startMinutes: 630, endMinutes: 710 },
        ],
      },
    ],
  },
  {
    code: "BIO112",
    name: "Introductory Biology II",
    credits: 5,
    prerequisites: ["BIO111"],
    sections: [
      {
        id: "BIO112-001",
        courseCode: "BIO112",
        title: "Introductory Biology II",
        meetings: [
          { day: "Tue", startMinutes: 720, endMinutes: 770 }, 
          { day: "Thu", startMinutes: 720, endMinutes: 770 },
          { day: "Fri", startMinutes: 720, endMinutes: 770 },
        ],
      },
    ],
  },
  {
    code: "BIO201",
    name: "Cellular Biochemistry/Metabolism",
    credits: 4,
    prerequisites: ["BIO112"],
    sections: [
      {
        id: "BIO201-001",
        courseCode: "BIO201",
        title: "Cellular Biochemistry/Metabolism",
        meetings: [
          { day: "Mon", startMinutes: 780, endMinutes: 860 }, 
          { day: "Wed", startMinutes: 780, endMinutes: 860 },
        ],
      },
    ],
  },
  {
    code: "BIO210",
    name: "Introduction to Ecology",
    credits: 4,
    prerequisites: ["BIO112"],
    sections: [
      {
        id: "BIO210-001",
        courseCode: "BIO210",
        title: "Introduction to Ecology",
        meetings: [
          { day: "Tue", startMinutes: 870, endMinutes: 950 }, 
          { day: "Thu", startMinutes: 870, endMinutes: 950 },
        ],
      },
    ],
  },
  {
    code: "CHEM110",
    name: "Introductory Chemistry",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "CHEM110-001",
        courseCode: "CHEM110",
        title: "Introductory Chemistry",
        meetings: [
          { day: "Mon", startMinutes: 540, endMinutes: 620 }, 
          { day: "Wed", startMinutes: 540, endMinutes: 620 },
        ],
      },
    ],
  },
  {
    code: "CHEM113",
    name: "Principles of Chemistry I",
    credits: 5,
    prerequisites: ["CHEM110"],
    sections: [
      {
        id: "CHEM113-001",
        courseCode: "CHEM113",
        title: "Principles of Chemistry I",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 660 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 660 },
          { day: "Fri", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "CHEM114",
    name: "Principles of Chemistry II",
    credits: 5,
    prerequisites: ["CHEM113"],
    sections: [
      {
        id: "CHEM114-001",
        courseCode: "CHEM114",
        title: "Principles of Chemistry II",
        meetings: [
          { day: "Mon", startMinutes: 630, endMinutes: 710 }, 
          { day: "Wed", startMinutes: 630, endMinutes: 710 },
          { day: "Fri", startMinutes: 630, endMinutes: 710 },
        ],
      },
    ],
  },
  {
    code: "CHEM150",
    name: "Introductory Forensic Science",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "CHEM150-001",
        courseCode: "CHEM150",
        title: "Introductory Forensic Science",
        meetings: [
          { day: "Tue", startMinutes: 720, endMinutes: 770 }, 
          { day: "Thu", startMinutes: 720, endMinutes: 770 },
        ],
      },
    ],
  },
  {
    code: "CHEM213",
    name: "Organic Chemistry I",
    credits: 4,
    prerequisites: ["CHEM114"],
    sections: [
      {
        id: "CHEM213-001",
        courseCode: "CHEM213",
        title: "Organic Chemistry I",
        meetings: [
          { day: "Mon", startMinutes: 780, endMinutes: 860 }, 
          { day: "Wed", startMinutes: 780, endMinutes: 860 },
        ],
      },
    ],
  },
  {
    code: "CHEM221",
    name: "Inorganic Chemistry",
    credits: 4,
    prerequisites: ["CHEM114"],
    sections: [
      {
        id: "CHEM221-001",
        courseCode: "CHEM221",
        title: "Inorganic Chemistry",
        meetings: [
          { day: "Tue", startMinutes: 870, endMinutes: 950 }, 
          { day: "Thu", startMinutes: 870, endMinutes: 950 },
        ],
      },
    ],
  },
  {
    code: "PHYS100",
    name: "Introductory Physics I",
    credits: 4,
    prerequisites: [],
    sections: [
      {
        id: "PHYS100-001",
        courseCode: "PHYS100",
        title: "Introductory Physics I",
        meetings: [
          { day: "Mon", startMinutes: 540, endMinutes: 620 }, 
          { day: "Wed", startMinutes: 540, endMinutes: 620 },
        ],
      },
    ],
  },
  {
    code: "PHYS101",
    name: "Introductory General Physics: Mechanics and Fluids",
    credits: 5,
    prerequisites: [],
    sections: [
      {
        id: "PHYS101-001",
        courseCode: "PHYS101",
        title: "Introductory General Physics: Mechanics and Fluids",
        meetings: [
          { day: "Tue", startMinutes: 600, endMinutes: 660 }, 
          { day: "Thu", startMinutes: 600, endMinutes: 660 },
          { day: "Fri", startMinutes: 600, endMinutes: 660 },
        ],
      },
    ],
  },
  {
    code: "PHYS105",
    name: "Heat, Waves, and Optics",
    credits: 5,
    prerequisites: [],
    sections: [
      {
        id: "PHYS105-001",
        courseCode: "PHYS105",
        title: "Heat, Waves, and Optics",
        meetings: [
          { day: "Mon", startMinutes: 630, endMinutes: 710 }, 
          { day: "Wed", startMinutes: 630, endMinutes: 710 },
        ],
      },
    ],
  },
  {
    code: "PHYS111",
    name: "Mechanics",
    credits: 5,
    prerequisites: [],
    sections: [
      {
        id: "PHYS111-001",
        courseCode: "PHYS111",
        title: "Mechanics",
        meetings: [
          { day: "Tue", startMinutes: 720, endMinutes: 770 }, 
          { day: "Thu", startMinutes: 720, endMinutes: 770 },
          { day: "Fri", startMinutes: 720, endMinutes: 770 },
        ],
      },
    ],
  },
  {
    code: "PHYS112",
    name: "Electricity and Magnetism",
    credits: 5,
    prerequisites: ["PHYS111", "MATH111"],
    sections: [
      {
        id: "PHYS112-001",
        courseCode: "PHYS112",
        title: "Electricity and Magnetism",
        meetings: [
          { day: "Mon", startMinutes: 780, endMinutes: 860 }, 
          { day: "Wed", startMinutes: 780, endMinutes: 860 },
        ],
      },
    ],
  },
  {
    code: "PHYS221",
    name: "Intermediate Mechanics",
    credits: 4,
    prerequisites: ["PHYS112", "MATH211"],
    sections: [
      {
        id: "PHYS221-001",
        courseCode: "PHYS221",
        title: "Intermediate Mechanics",
        meetings: [
          { day: "Tue", startMinutes: 870, endMinutes: 950 }, 
          { day: "Thu", startMinutes: 870, endMinutes: 950 },
        ],
      },
    ],
  },
];

