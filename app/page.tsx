import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">
        UFV Course Planner
      </h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Plan your semesters, check prerequisites, and build your degree roadmap
        with ease.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Get Started
        </Link>
        <button className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </main>
  );
}

