/**
 *  TIME CONFLICT DETECTION (Interval Sorting Algorithm)
 * 
 * This algorithm checks whether a set of selected course sections
 * contains any timetable conflicts
 *
 * HOW IT WORKS:
 * 1. look at each weekday separately (Mon–Fri)
 * 2. For a given day, gather all meeting times occurring on that day
 * 3. sort these meetings by their starting time
 * 4. only need to compare adjacent intervals after sorting:
 *      - If Meeting A ends after Meeting B starts → conflict
 * 
 * EXAMPLE:
 * If Monday classes are:
 *    - 9:00–10:00
 *    - 9:30–10:30
 * After sorting, the algorithm sees that 9:30 < 10:00 → conflict
 *
 * USED IN:
 * - generateSchedule (during backtracking schedule construction)
 * - Semester Planner UI
 */
import { Section, MeetingTime, Weekday } from "../types";

export interface Conflict {
  day: Weekday;
  sectionA: Section;
  sectionB: Section;
  timeA: MeetingTime;
  timeB: MeetingTime;
}

function hasOverlap(a: MeetingTime, b: MeetingTime): boolean {
  // intervals [start, end)
  return a.startMinutes < b.endMinutes && b.startMinutes < a.endMinutes;
}

export function detectConflicts(sections: Section[]): Conflict[] {
  const conflicts: Conflict[] = [];

  const days: Weekday[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  for (const day of days) {
    // collect all meetings on this day with their section
    const meetings: { section: Section; meeting: MeetingTime }[] = [];

    sections.forEach((section) => {
      section.meetings.forEach((m) => {
        if (m.day === day) {
          meetings.push({ section, meeting: m });
        }
      });
    });

    // sort by start time
    meetings.sort((a, b) => a.meeting.startMinutes - b.meeting.startMinutes);

    // check neighbours for overlap
    for (let i = 0; i < meetings.length - 1; i++) {
      const current = meetings[i];
      const next = meetings[i + 1];

      if (hasOverlap(current.meeting, next.meeting)) {
        conflicts.push({
          day,
          sectionA: current.section,
          sectionB: next.section,
          timeA: current.meeting,
          timeB: next.meeting,
        });
      }
    }
  }

  return conflicts;
}
