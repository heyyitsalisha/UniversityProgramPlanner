/**
 *  MULTI-SEMESTER ROADMAP GENERATION (Topological Sorting + Greedy Term Filling)
 * 
 * Builds an ordered set of academic terms that respects prerequisite
 * relationships and user-selected credit limits
 *
 * OVERALL GOAL:
 * - Given a program (list of required courses)
 *   build a valid multi-term sequence showing how a student can complete
 *   their degree
 * - Also respects completed courses: already-finished courses are skipped
 *
 * STEP 1 — Topological Sort (Kahn's Algorithm)
 * - Compute in-degree for each course
 * - Start with all courses that have no prerequisites.
 * - Remove them from the graph one-by-one
 * - Each removal reduces the in-degree of dependent courses
 * - When a course reaches in-degree 0, it becomes available
 *
 * STEP 2 — Greedy Term Construction
 * After valid order, place courses into terms:
 *
 * For each term:
 *  - Add all available courses whose prerequisites are already completed
 *  - Do not exceed the max credits per term 
 *  - Mark those courses as “completed” and move to next term
 * 
 * USED IN:
 * - Roadmap page
 * - Academic Profile system
 */


import { COURSES } from "../data/courses";
import { Course } from "../types";

export type TermPlan = Course[][];

function topoSort(courses: Course[]): Course[] {
  const inDegree = new Map<string, number>();
  const graph = new Map<string, string[]>();

  courses.forEach((c) => {
    inDegree.set(c.code, 0);
    graph.set(c.code, []);
  });

  courses.forEach((c) => {
    c.prerequisites.forEach((pre) => {
      if (!graph.has(pre)) return;
      graph.get(pre)!.push(c.code);
      inDegree.set(c.code, (inDegree.get(c.code) ?? 0) + 1);
    });
  });

  const queue: string[] = [];
  inDegree.forEach((deg, code) => {
    if (deg === 0) queue.push(code);
  });

  const order: Course[] = [];

  while (queue.length > 0) {
    const code = queue.shift()!;
    const course = courses.find((c) => c.code === code);
    if (course) order.push(course);

    const neighbours = graph.get(code) ?? [];
    neighbours.forEach((nbr) => {
      inDegree.set(nbr, (inDegree.get(nbr) ?? 0) - 1);
      if (inDegree.get(nbr) === 0) queue.push(nbr);
    });
  }

  return order;
}

/**
 * Build a roadmap given required course codes, a set of already completed
 * courses and a max credits per term.
 */
export function buildRoadmapWithCompleted(
  requiredCourseCodes: string[],
  completedCourseCodes: string[],
  maxCreditsPerTerm = 12
): TermPlan {
  // Required courses in the catalog
  const requiredCourses = COURSES.filter((c) =>
    requiredCourseCodes.includes(c.code)
  );

  if (requiredCourses.length === 0) return [];

  const sorted = topoSort(requiredCourses);

  const plannedTerms: TermPlan = [];

  // Start with any completed courses as already done (even if not required)
  const completed = new Set<string>(
    completedCourseCodes.map((c) => c.toUpperCase())
  );

  // If some required courses are already completed, won't schedule them
  while (
    requiredCourses.some((c) => !completed.has(c.code)) &&
    sorted.length > 0
  ) {
    let termCredits = 0;
    const termCourses: Course[] = [];

    for (const course of sorted) {
      if (completed.has(course.code)) continue;

      const allPrereqsDone = course.prerequisites.every((pre) =>
        completed.has(pre)
      );
      if (!allPrereqsDone) continue;

      if (termCredits + course.credits <= maxCreditsPerTerm) {
        termCourses.push(course);
        termCredits += course.credits;
      }
    }

    if (termCourses.length === 0) {
      // no more courses can be scheduled (likely due to missing prereqs)
      break;
    }

    termCourses.forEach((c) => completed.add(c.code));
    plannedTerms.push(termCourses);
  }

  return plannedTerms;
}

// convenience wrapper (no completed courses)
export function buildRoadmap(
  requiredCourseCodes: string[],
  maxCreditsPerTerm = 12
): TermPlan {
  return buildRoadmapWithCompleted(requiredCourseCodes, [], maxCreditsPerTerm);
}
