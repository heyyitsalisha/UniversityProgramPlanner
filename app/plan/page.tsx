"use client";

import React, { useMemo, useState } from "react";
import { COURSES } from "../../lib/data/courses";
import { generateSchedule } from "../../lib/algos/scheduler";
import { Section } from "../../lib/types";
import { RequireAuth } from "../requireAuth";
import { useAcademicProfile } from "../academicProfileContext";

function minutesToTime(m: number): string {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return `${h}:${pad(mm)}`;
}

//pull subject from course code (COMP150 -> COMP)
function getSubject(code: string): string {
  const match = code.match(/^[A-Za-z]+/);
  return match ? match[0].toUpperCase() : code.toUpperCase();
}

export default function PlanPage() {
  const [selectedCodes, setSelectedCodes] = useState<string[]>([]);
  const [schedule, setSchedule] = useState<Section[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [subjectFilter, setSubjectFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  const { isCompleted } = useAcademicProfile();

  // derive subjects from COURSES 
  const subjects = useMemo(() => {
    const set = new Set<string>();
    COURSES.forEach((course) => {
      set.add(getSubject(course.code));
    });
    return Array.from(set).sort();
  }, []);

  // filter courses based on subject, search, completed toggle
  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return COURSES.filter((course) => {
      const subject = getSubject(course.code);

      if (subjectFilter !== "ALL" && subject !== subjectFilter) {
        return false;
      }

      if (hideCompleted && isCompleted(course.code)) {
        return false;
      }

      if (!q) return true;

      const text =
        (course.code + " " + course.name).toLowerCase();

      return text.includes(q);
    });
  }, [subjectFilter, searchQuery, hideCompleted]);

  const toggleCourse = (code: string) => {
    setSelectedCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const handleGenerate = () => {
    if (selectedCodes.length === 0) {
      setError("Please select at least one course.");
      setSchedule(null);
      return;
    }

    const result = generateSchedule(selectedCodes);
    if (!result) {
      setError("No valid schedule found for that combination of courses.");
      setSchedule(null);
    } else {
      setError(null);
      setSchedule(result.sections);
    }
  };

  const handleSelectAllVisible = () => {
    const visibleCodes = filteredCourses
      .map((c) => c.code)
      .filter((code) => !isCompleted(code)); // don’t auto-select completed

    setSelectedCodes(visibleCodes);
  };

  const handleClearSelection = () => {
    setSelectedCodes([]);
  };

  return (
    <RequireAuth>
      <div className="card">
        <h1>Semester Planner</h1>
        <p>
          Select courses and generate a timetable. The planner uses an
          interval-based conflict detection algorithm and a backtracking
          search to find a valid schedule.
        </p>

        {/* Filters / controls */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <div className="form-row">
            <label>
              Subject
              <select
                className="select"
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
              >
                <option value="ALL">All subjects</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>
              Search (code or name)
              <input
                className="input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., COMP251 or Algorithms"
              />
            </label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
            marginBottom: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <label style={{ fontSize: "0.9rem" }}>
            <input
              type="checkbox"
              checked={hideCompleted}
              onChange={(e) => setHideCompleted(e.target.checked)}
              style={{ marginRight: "0.35rem" }}
            />
            Hide completed courses
          </label>

          <span style={{ fontSize: "0.9rem", color: "#555" }}>
            Showing <strong>{filteredCourses.length}</strong> of{" "}
            {COURSES.length} courses. Selected:{" "}
            <strong>{selectedCodes.length}</strong>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSelectAllVisible}
          >
            Select all visible
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClearSelection}
          >
            Clear selection
          </button>
        </div>

        {/* Course list */}
        {filteredCourses.length === 0 ? (
          <p style={{ fontSize: "0.9rem", color: "#555" }}>
            No courses match your filters. Try widening your search.
          </p>
        ) : (
          <ul className="list-plain">
            {filteredCourses.map((course) => {
              const completed = isCompleted(course.code);
              const selected = selectedCodes.includes(course.code);
              const subject = getSubject(course.code);

              return (
                <li
                  key={course.code}
                  style={{
                    marginBottom: "0.3rem",
                    padding: "0.3rem 0.4rem",
                    borderRadius: 4,
                    background: selected
                      ? "rgba(0, 99, 65, 0.08)"
                      : "transparent",
                    opacity: completed ? 0.6 : 1,
                    borderBottom: "1px solid #e2e8e4",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                    }}
                  >
                    <span>
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleCourse(course.code)}
                        style={{ marginRight: "0.4rem" }}
                        disabled={completed}
                      />
                      <strong>{course.code}</strong> – {course.name}
                      <span
                        style={{
                          fontSize: "0.8rem",
                          marginLeft: "0.4rem",
                          color: "#555",
                        }}
                      >
                        [{subject}]
                      </span>
                      {completed && (
                        <span
                          style={{
                            fontSize: "0.8rem",
                            marginLeft: "0.4rem",
                          }}
                        >
                          (completed)
                        </span>
                      )}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        <div style={{ marginTop: "0.75rem" }}>
          <button className="btn" onClick={handleGenerate}>
            Generate schedule
          </button>
        </div>

        {error && <div className="error-text">{error}</div>}
      </div>

      {schedule && (
        <div className="card">
          <h2>Generated Schedule</h2>
          {schedule.map((section) => (
            <div
              key={section.id}
              style={{
                borderBottom: "1px solid #e2e8e4",
                paddingBottom: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <strong>{section.courseCode}</strong> – {section.title}
              <ul>
                {section.meetings.map((m, idx) => (
                  <li key={idx}>
                    {m.day} {minutesToTime(m.startMinutes)}–
                    {minutesToTime(m.endMinutes)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </RequireAuth>
  );
}
