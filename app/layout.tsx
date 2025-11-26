import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./AuthContext";
import { Shell } from "./Shell";
import { AcademicProfileProvider } from "./academicProfileContext";

export const metadata: Metadata = {
  title: "UFV Course Planner",
  description: "Academic planning tool for UFV students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AcademicProfileProvider>
            <Shell>{children}</Shell>
          </AcademicProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
