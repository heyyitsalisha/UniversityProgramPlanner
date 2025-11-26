"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { PROGRAMS } from "../lib/data/programs";
import { Program } from "../lib/types";

const STORAGE_KEY = "ufv-course-planner-profile";

export interface AcademicProfile {
  programId: string | null;
  completedCourseCodes: string[];
}

interface AcademicProfileContextType {
  profile: AcademicProfile;
  setProgram: (programId: string | null) => void;
  toggleCompletedCourse: (courseCode: string) => void;
  clearCompleted: () => void;
  getProgram: () => Program | null;
  isCompleted: (courseCode: string) => boolean;
}

const AcademicProfileContext = createContext<
  AcademicProfileContextType | undefined
>(undefined);

export function AcademicProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<AcademicProfile>({
    programId: null,
    completedCourseCodes: [],
  });

  // Load from localStorage at startup
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as AcademicProfile;
        setProfile(parsed);
      } catch {
      }
    }
  }, []);

  // Save to localStorage when profile changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  function setProgram(programId: string | null) {
    setProfile((prev) => ({
      ...prev,
      programId,
    }));
  }

  function toggleCompletedCourse(courseCode: string) {
    setProfile((prev) => {
      const exists = prev.completedCourseCodes.includes(courseCode);
      return {
        ...prev,
        completedCourseCodes: exists
          ? prev.completedCourseCodes.filter((c) => c !== courseCode)
          : [...prev.completedCourseCodes, courseCode],
      };
    });
  }

  function clearCompleted() {
    setProfile((prev) => ({
      ...prev,
      completedCourseCodes: [],
    }));
  }

  function getProgram(): Program | null {
    if (!profile.programId) return null;
    return PROGRAMS.find((p) => p.id === profile.programId) ?? null;
  }

  function isCompleted(courseCode: string): boolean {
    return profile.completedCourseCodes.includes(courseCode);
  }

  const value: AcademicProfileContextType = {
    profile,
    setProgram,
    toggleCompletedCourse,
    clearCompleted,
    getProgram,
    isCompleted,
  };

  return (
    <AcademicProfileContext.Provider value={value}>
      {children}
    </AcademicProfileContext.Provider>
  );
}

export function useAcademicProfile(): AcademicProfileContextType {
  const ctx = useContext(AcademicProfileContext);
  if (!ctx) {
    throw new Error(
      "useAcademicProfile must be used inside an AcademicProfileProvider"
    );
  }
  return ctx;
}
