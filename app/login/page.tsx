"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/";

  const [email, setEmail] = useState("student@ufv.ca");
  const [password, setPassword] = useState("ufv123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const ok = await login(email.trim(), password);
    setLoading(false);

    if (!ok) {
      setError("Invalid credentials. Use student@ufv.ca / ufv123.");
      return;
    }

    router.push(redirectTo);
  }

  return (
    <div className="card">
      <h1>Log in</h1>
      <p style={{ fontSize: "0.9rem" }}>
        This demo uses a single account:
        <br />
        <strong>Email:</strong> student@ufv.ca{" "}
        <strong>Password:</strong> ufv123
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Email
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Password
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </label>
        </div>

        {error && <div className="error-text">{error}</div>}

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
