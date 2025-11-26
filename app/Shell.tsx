"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAuth } from "./AuthContext";

export function Shell({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-title">UFV Course Planner</div>
        <nav className="app-header-nav">
          <Link href="/" className="app-header-link">
            Home
          </Link>
          <Link href="/plan" className="app-header-link">
            Plan Semester
          </Link>
          <Link href="/roadmap" className="app-header-link">
            Roadmap
          </Link>
          <Link href="/profile" className="app-header-link">
            Profile
          </Link>
          {user ? (
            <>
              <span className="app-header-user">{user.name}</span>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={logout}
              >
                Log out
              </button>
            </>
          ) : (
            <Link href="/login" className="app-header-link">
              Log in
            </Link>
          )}
        </nav>
      </header>
      <main className="app-main">{children}</main>
    </div>
  );
}