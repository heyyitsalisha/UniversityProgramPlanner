// app/page.tsx
// Home / landing page for the Course Planner

import Link from "next/link";

export default function Home() {
  return (
    // Outer wrapper: full screen height, light background, dark text
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Navigation Bar*/}
      <header className="w-full border-b bg-white">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo / App name on the left */}
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-bold">
              UFV
            </span>
            <span className="font-semibold text-lg">Course Planner</span>
          </div>

          {/* Simple nav links on the right (anchor links to sections below) */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#features" className="hover:text-green-700">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-green-700">
              How it works
            </a>
            {/* Login link */}
            <Link
              href="/login"
              className="border border-green-700 text-green-700 px-3 py-1 rounded-md hover:bg-green-700 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content area */}
      <div className="flex-1">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: text content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plan your UFV degree with confidence.
            </h1>
            <p className="text-base md:text-lg mb-6 text-slate-700">
              The UFV Course Planner helps students build conflict-free
              schedules, check prerequisites automatically, and map out
              multi-semester degree pathways based on workload and interests.
            </p>

            {/* Primary call-to-action buttons */}
            <div className="flex flex-wrap gap-3">
              {/* Takes the user to the login page */}
              <Link
                href="/login"
                className="bg-green-700 text-white px-5 py-2 rounded-md text-sm md:text-base hover:bg-green-800 transition-colors"
              >
                Start planning
              </Link>

              {/* Scrolls down to the features section */}
              <a
                href="#features"
                className="px-5 py-2 rounded-md border border-slate-300 text-sm md:text-base hover:bg-slate-100"
              >
                Learn more
              </a>
            </div>

            {/* Small note that this is a prototype for a class project */}
            <p className="mt-4 text-xs md:text-sm text-slate-500">
              This is a prototype developed for a UFV course project. Data and
              recommendations are for demonstration purposes only.
            </p>
          </div>

          {/* Right: summary card to hint at what the app does */}
          <div className="bg-white rounded-lg shadow-md p-5 md:p-6 border border-slate-100">
            <h2 className="text-lg font-semibold mb-3">
              Example semester overview
            </h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex justify-between">
                <span>COMP 150</span>
                <span className="text-slate-500">Intro Programming</span>
              </li>
              <li className="flex justify-between">
                <span>COMP 251</span>
                <span className="text-slate-500">Data Structures</span>
              </li>
              <li className="flex justify-between">
                <span>MATH 111</span>
                <span className="text-slate-500">Calculus I</span>
              </li>
              <li className="flex justify-between">
                <span>ENGL 105</span>
                <span className="text-slate-500">Academic Writing</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              The planner will generate schedules like this, checking for time
              conflicts and missing prerequisites.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="bg-white border-t border-b border-slate-200"
        >
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Key features
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Feature card 1 */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold mb-2 text-lg">
                  Prerequisite checks
                </h3>
                <p className="text-sm text-slate-700">
                  Enter completed courses and let the system automatically
                  determine which future courses you are eligible to take.
                </p>
              </div>

              {/* Feature card 2 */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold mb-2 text-lg">
                  Conflict-free schedules
                </h3>
                <p className="text-sm text-slate-700">
                  Generate weekly timetables that avoid time conflicts and
                  respect your preferred workload (3–5 courses per semester).
                </p>
              </div>

              {/* Feature card 3 */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h3 className="font-semibold mb-2 text-lg">
                  Multi-semester roadmap
                </h3>
                <p className="text-sm text-slate-700">
                  Preview how your chosen courses fit into a longer-term degree
                  plan, making it easier to graduate on time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How it works
          </h2>

          <ol className="space-y-4 text-sm md:text-base">
            <li>
              <span className="font-semibold">1. Log in or use a demo user.</span>{" "}
              Start from the login page and sign in with a demo account. In the
              prototype, this is a simple mock login for testing.
            </li>
            <li>
              <span className="font-semibold">
                2. Enter your completed and desired courses.
              </span>{" "}
              On the planning page, you&apos;ll select your major, workload, and
              previous courses.
            </li>
            <li>
              <span className="font-semibold">
                3. Generate and review schedule options.
              </span>{" "}
              The system will generate valid schedule options, highlight any
              problems (like missing prerequisites), and display a basic
              roadmap.
            </li>
          </ol>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full border-t bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-slate-500 flex justify-between">
          <span>UFV Course Planner &middot; Class project prototype</span>
          <span>Built with Next.js and TypeScript</span>
        </div>
      </footer>
    </main>
  );
}
