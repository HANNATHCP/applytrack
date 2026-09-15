"use client";

import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
      <div className="w-full max-w-4xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-950">
                A
              </div>

              <span className="text-xl font-bold">ApplyTrack</span>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
              Your placement companion
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Your placement journey, organized.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
              Track every job application, manage your progress, and stay
              ready for your next opportunity.
            </p>

            <button
              onClick={() => {
              localStorage.setItem("applytrack-visited", "true");
              router.push("/");}}
              className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Get Started
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                📋
              </div>

              <h2 className="font-semibold">Track Applications</h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Keep all your job applications organized in one place.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 text-xl">
                📈
              </div>

              <h2 className="font-semibold">Monitor Progress</h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Track your application status from wishlist to interview and
                offer.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
                ✨
              </div>

              <h2 className="font-semibold">Stay Organized</h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Update, manage, and simplify your entire placement journey.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-slate-600">
          Built for students who are ready for their next opportunity.
        </p>
      </div>
    </main>
  );
}