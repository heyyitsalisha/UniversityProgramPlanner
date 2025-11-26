"use client";

import { RequireAuth } from "../requireAuth";
import { PROGRAMS } from "../../lib/data/programs";
import { COURSES } from "../../lib/data/courses";
import { useAcademicProfile } from "../academicProfileContext";

export default function ProfilePage() {
  const {
    profile,
    setProgram,
    toggleCompletedCourse,
    clearCompleted,
    getProgram,
    isCompleted,
  } = useAcademicProfile();

  const selectedProgram = getProgram();

  const requiredSet = new Set(
    selectedProgram?.requiredCourseCodes ?? []
  );

  return (
    <RequireAuth>
      <div className="card">
        <h1>Academic Profile</h1>
        <p>
          Choose your program and mark the courses you’ve already completed.
          The roadmap and planner will adapt based on this profile.
        </p>

        <div className="form-row">
          <label>
            Program
            <select
              className="select"
              value={profile.programId ?? ""}
              onChange={(e) =>
                setProgram(e.target.value || null)
              }
            >
              <option value="">Select a program…</option>
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        {selectedProgram && (
          <p style={{ fontSize: "0.9rem" }}>
            <strong>Program overview:</strong>{" "}
            {selectedProgram.description}
            <br />
            Required courses:{" "}
            {selectedProgram.requiredCourseCodes.length}
          </p>
        )}
      </div>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Completed Courses</h2>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={clearCompleted}
          >
            Clear all
          </button>
        </div>
        <p style={{ fontSize: "0.9rem" }}>
          Tick the courses you have already finished. Required courses for your
          selected program are highlighted.
        </p>

        <ul className="list-plain">
          {COURSES.map((course) => (
            <li
              key={course.code}
              style={{
                marginBottom: "0.3rem",
                padding: "0.3rem 0.4rem",
                borderRadius: 4,
                background: requiredSet.has(course.code)
                  ? "rgba(0, 99, 65, 0.05)"
                  : "transparent",
              }}
            >
              <label>
                <input
                  type="checkbox"
                  checked={isCompleted(course.code)}
                  onChange={() => toggleCompletedCourse(course.code)}
                  style={{ marginRight: "0.4rem" }}
                />
                <strong>{course.code}</strong> – {course.name}
                {requiredSet.has(course.code) && (
                  <span style={{ fontSize: "0.8rem", marginLeft: "0.4rem" }}>
                    (required)
                  </span>
                )}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </RequireAuth>
  );
}
