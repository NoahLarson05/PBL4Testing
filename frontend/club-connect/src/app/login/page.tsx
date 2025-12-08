// app/login/page.tsx (or src/app/login/page.tsx)
"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // For now just log, later you connect to real auth / API
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border p-8 space-y-6">
        <div className="space-y-1 text-center">
          <div className="mx-auto h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold mb-2">
            CC
          </div>
          <h1 className="text-xl font-semibold text-slate-900">
            Log in to ClubConnect
          </h1>
          <p className="text-xs text-slate-500">
            Use your university email to access club and event info.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              placeholder="example@fc.ritsumei.ac.jp"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 text-white text-sm font-medium py-2.5 hover:bg-slate-800"
          >
            Log in
          </button>
        </form>

        <p className="text-[11px] text-slate-500 text-center">
          Don&apos;t have an account yet?{" "}
          <span className="text-slate-900 font-medium">
            (For now, ask the dev team )
          </span>
        </p>

        <div className="text-center">
          <Link
            href="/"
            className="text-xs text-slate-600 hover:text-slate-900 underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}