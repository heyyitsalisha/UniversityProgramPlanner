//mock data for programs

import { Program } from "../types";

export const PROGRAMS: Program[] = [
  {
    id: "bsc-cs-sample",
    name: "BSc Computing Science (sample)",
    description:
      "Simplified sample program including core CS courses and calculus.",
    requiredCourseCodes: [
      "COMP120",
      "COMP125",
      "COMP150",
      "COMP152",
      "COMP155",
      "COMP230",
      "COMP251",
      "COMP256",
      "COMP340",
      "COMP350",
      "COMP351",
      "COMP359",
      "COMP360",
      "COMP331",
      "COMP325",
      "MATH141",
    ],
  },
  {
    id: "cs-diploma-sample",
    name: "Computing Science Diploma (sample)",
    description: "Shorter set of foundational courses for a sample diploma.",
    requiredCourseCodes: [
      "COMP120",
      "COMP125",
      "COMP150",
      "COMP152",
      "COMP155",
      "COMP230",
      "COMP251",
      "COMP256",
      "MATH141",
    ],
  },
];
