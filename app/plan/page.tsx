"use client";

import { useState } from "react";

export default function PlanPage() {
  const [major, setMajor] = useState("CIS");
  const [workload, setWorkload] = useState(4);
  const [schedule, setSchedule] = useState<string[]>([]);

  const handleGenerateSchedule = () => {
    // Temporary mock data; replace later with real algorithm
    const mock = [
      "COMP 150 – Introduction to Programming",
      "COMP 251 – Data Structures",
      "MATH 111 – Calculus I",
      "ENGL 105 – Academic Writing",
    ];
    setSchedule(mock.slice(0, workload));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Course Planner Dashboard
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerateSchedule();
          }}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="font-semibold mb-1">Select Major</span>
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="border rounded-md p-2"
            >
              <option value="CIS">Computer Information Systems</option>
              <option value="COMP">Computing Science</option>
              <option value="BUS">Business</option>
              <option value="PSYC">Psychology</option>
            </select>
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-1">Workload (courses)</span>
            <input
              type="number"
              min="3"
              max="5"
              value={workload}
              onChange={(e) => setWorkload(Number(e.target.value))}
              className="border rounded-md p-2"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
          >
            Generate Schedule
          </button>
        </form>

        {schedule.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Recommended Schedule
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {schedule.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
