"use client";

import React, { useState } from "react";
import { RequireAuth } from "../requireAuth";
import { useAcademicProfile } from "../academicProfileContext";
import { buildRoadmapWithCompleted } from "../../lib/algos/roadmap";
import { PROGRAMS } from "../../lib/data/programs";

export default function RoadmapPage() {
  const { profile, getProgram } = useAcademicProfile();
  const [maxCredits, setMaxCredits] = useState(12);

  const program = getProgram();

  if (!program) {
    return (
      <RequireAuth>
        <div className="card">
          <h1>Multi-Semester Roadmap</h1>
          <p>
            To generate a roadmap, please first select a program in your{" "}
            <strong>Profile</strong> and mark any courses you have already
            completed.
          </p>
        </div>
      </RequireAuth>
    );
  }

  const roadmap = buildRoadmapWithCompleted(
    program.requiredCourseCodes,
    profile.completedCourseCodes,
    maxCredits
  );

  const requiredCount = program.requiredCourseCodes.length;
  const completedRequiredCount = program.requiredCourseCodes.filter((code) =>
    profile.completedCourseCodes.includes(code)
  ).length;

  return (
    <RequireAuth>
      <div className="card">
        <h1>Multi-Semester Roadmap</h1>
        <p>
          Program: <strong>{program.name}</strong>
        </p>
        {program.description && (
          <p style={{ fontSize: "0.9rem" }}>{program.description}</p>
        )}
        <p style={{ fontSize: "0.9rem" }}>
          Completed required courses:{" "}
          <strong>
            {completedRequiredCount} / {requiredCount}
          </strong>
        </p>

        <div className="form-row" style={{ maxWidth: "200px" }}>
          <label>
            Max credits per term
            <input
              className="input"
              type="number"
              value={maxCredits}
              onChange={(e) => setMaxCredits(Number(e.target.value) || 0)}
            />
          </label>
        </div>
      </div>

      {roadmap.length > 0 ? (
        roadmap.map((term, index) => (
          <div key={index} className="card">
            <h2>Term {index + 1}</h2>
            <ul>
              {term.map((course) => (
                <li key={course.code}>
                  <strong>{course.code}</strong> – {course.name} (
                  {course.credits} cr)
                  {course.prerequisites.length > 0 && (
                    <span>
                      {" "}
                      [prereqs: {course.prerequisites.join(", ")}]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="card">
          <p>
            No additional terms could be scheduled. You may already have most
            required courses completed, or there may be missing prerequisites in
            the catalog.
          </p>
        </div>
      )}
    </RequireAuth>
  );
}
