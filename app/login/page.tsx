// app/login/page.tsx
// Login screen for the Course Planner

"use client"; 

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  // Form state: stores what the user types into the input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Holds any error message to display under the form
  const [error, setError] = useState("");

  // Handles the form submission when the user clicks "Login"
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from reloading

    // --- MOCK AUTHENTICATION LOGIC ---
    // For now, we accept one hard-coded demo account.
    // Later, we will replace this with real validation or a database lookup.
    if (email === "student@ufv.ca" && password === "password123") {
      setError("");        // Clear any previous error
      router.push("/plan"); // Redirect to the planner dashboard
    } else {
      setError("Invalid email or password. Try 'student@ufv.ca' with 'password123'.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-900">
      {/* Top small link back to the homepage */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="text-sm text-slate-600 hover:text-slate-900 underline"
        >
          ← Back to home
        </Link>
      </div>

      {/* Main login card */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm border border-slate-200">
        {/* App title */}
        <h1 className="text-2xl font-bold mb-2 text-center text-black">
          UFV Course Planner
        </h1>
        <p className="text-xs text-center mb-6 text-slate-600">
          Prototype login &mdash; use the demo account to continue.
        </p>

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
          {/* Email input */}
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // update email state
              required
              placeholder="email"
              className="border rounded-md p-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </label>

          {/* Password input */}
          <label className="flex flex-col gap-1 text-sm">
            <span className="font-semibold">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // update password state
              required
              placeholder="password"
              className="border rounded-md p-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </label>

          {/* Error message display (only shows if error is non-empty) */}
          {error && (
            <p className="text-red-600 text-xs">
              {error}
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="mt-2 bg-green-700 text-white font-semibold py-2 rounded-md hover:bg-green-800 transition-colors text-sm"
          >
            Login
          </button>
        </form>

        {/* Small hint about demo credentials */}
        <div className="mt-4 text-xs text-slate-600">
          <p className="font-semibold mb-1">Demo account:</p>
          <p>Email: <code className="bg-slate-100 px-1 rounded">student@ufv.ca</code></p>
          <p>Password: <code className="bg-slate-100 px-1 rounded">password123</code></p>
        </div>
      </div>
    </main>
  );
}
