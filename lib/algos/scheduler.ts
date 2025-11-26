/**
 *  SCHEDULE GENERATION (Backtracking Search with Constraints)
 * 
 * This algorithm attempts to build a complete semester schedule
 * from a list of desired course codes
 *
 * IDEA:
 * - Each course may have multiple available sections (e.g., COMP150-001, COMP150-002).
 * - Must choose exactly ONE section per course
 * - Must avoid time conflicts between all chosen sections
 *
 * - Depth-first recursive backtracking search:
 *      1. Start with an empty schedule
 *      2. For the first course, try each section one at a time
 *      3. After adding a section, run conflict detection
 *      4. If no conflicts, continue to the next course
 *      5. If a conflict happens, backtrack and try a different section
 *      6. If no section works, the algorithm backtracks again
 *
 * USED IN:
 * - Semester Planner "Generate Schedule" button
 */

import { COURSES } from "../data/courses";
import { Section } from "../types";
import { detectConflicts } from "./conflicts";

export interface ScheduleResult {
  sections: Section[];
}

export function findCourseSections(courseCodes: string[]): Section[][] {
  return courseCodes.map((code) => {
    const course = COURSES.find((c) => c.code === code);
    return course ? course.sections : [];
  });
}

export function generateSchedule(
  desiredCourseCodes: string[]
): ScheduleResult | null {
  const sectionOptions = findCourseSections(desiredCourseCodes);

  if (sectionOptions.some((options) => options.length === 0)) {
    // at least one course has no available sections
    return null;
  }

  const current: Section[] = [];

  function backtrack(courseIndex: number): boolean {
    if (courseIndex === sectionOptions.length) {
      return true; // placed all courses
    }

    for (const section of sectionOptions[courseIndex]) {
      const trialSchedule = [...current, section];
      const conflicts = detectConflicts(trialSchedule);

      if (conflicts.length === 0) {
        current.push(section);
        if (backtrack(courseIndex + 1)) {
          return true;
        }
        current.pop();
      }
    }

    return false;
  }

  const success = backtrack(0);
  return success ? { sections: [...current] } : null;
}
