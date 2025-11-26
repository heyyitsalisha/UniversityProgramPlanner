import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="card">
        <h1>UFV Course Planner</h1>
        <p>
          A prototype web app that helps UFV students build conflict-free
          semester schedules and visualize multi-semester degree pathways.
        </p>
        <p style={{ fontSize: "0.9rem" }}>
          This project demonstrates:
        </p>
        <ul>
          <li>Interval-based schedule conflict detection</li>
          <li>Backtracking schedule generation with constraints</li>
          <li>
            Topological sort + greedy algorithm for multi-semester roadmaps
          </li>
          <li>Simple demo authentication with a UFV-themed interface</li>
        </ul>
        <div style={{ marginTop: "0.75rem" }}>
          <Link href="/plan" className="btn" style={{ marginRight: "0.5rem" }}>
            Plan a semester
          </Link>
          <Link href="/roadmap" className="btn btn-secondary">
            View roadmap
          </Link>
        </div>
      </div>
    </>
  );
}
